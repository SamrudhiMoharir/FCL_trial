import { create } from 'zustand';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api/auth" : "/api/auth";

axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,
  isCheckingAuth: true,
  message: null,

  signup: async (email, password, name) => {
    set({isLoading: true, error: null});

    try {
        const response = await axios.post(`${API_URL}/signup`, {email, password, name});
        set({user: response.data.user, isLoading: false, isAuthenticated: true})

    } catch (error) {
        toast.error(error.response.data.message)
        set({isLoading: false, error: error.response?.data?.message || "error signing up"})
        throw error;
    }
  },

  verifyMail: async (code) => {
    set({isLoading: true, error: null});

    try {
        const response = await axios.post(`${API_URL}/verify-email`, {code});
        set({isLoading: false, isAuthenticated: true,user: response.data.user})
        return response.data

    } catch (error) {
        set({isLoading: false, error: error.response.data.message});
        throw error;
    }

  },

  checkAuth: async () => {
    set({error: null, isCheckingAuth: true});
    try {
      const response = await axios.get(`${API_URL}/check-auth`)
      set({isAuthenticated: true, isCheckingAuth: false, user: response.data.user})

    } catch (error) {
      set({error: null, isCheckingAuth: false, isAuthenticated: false})
    }
  },

  login: async (email, password) => {
    set({isLoading: true, error: null});

    try {
        const response = await axios.post(`${API_URL}/login`, {email, password});
        set({isAuthenticated:true, isLoading: false, user: response.data.user})

    } catch (error) {
        toast.error(error.response.data.message)
        set({isLoading: false, error: error.response.data.message});
        throw error;
    }
  },

  forgotPassword: async (email) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error sending reset password email",
			});
			throw error;
		}
	},  

  resetPassword: async (token, password) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ message: response.data.message, isLoading: false });
		} catch (error) {
			set({
				isLoading: false,
				error: error.response.data.message || "Error resetting password email",
			});
			throw error;
		}
	},

  logout: async () => {
    set({ isLoading: true, error: null });

    try {
        await axios.post(`${API_URL}/logout`);
        set({ user: null, isAuthenticated: false, isLoading: false });
    } catch (error) {
        set({ isLoading: false, error: error.response?.data?.message || "Error logging out" });
        throw error;
    }
  }

}));