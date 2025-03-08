import { transporter } from "./nodemailer.config.js";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    console.log("Recipient defined");

    try {
        const info = await transporter.sendMail({
            from: "shivajirp123@gmail.com",
            to: email, // Should be a string
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        });

        console.log("Verification email sent successfully", info.messageId);
    } catch (error) {
        console.error("Error sending verification mail", error);
        throw new Error("Error sending verification mail");
    }
};

export const sendWelcomeEmail = async (email, username) => {
    try {
        const info = await transporter.sendMail({
            from: "shivajirp123@gmail.com",
            to: email,
            subject: "Welcome to The Future!",
            html: `<p>Hi ${username},</p><p>Welcome to The Future! We are glad to have you.</p>`,
        });

        console.log("Welcome email sent successfully", info.messageId);
    } catch (error) {
        console.error("Error sending welcome mail", error);
        throw new Error("Error sending welcome mail");
    }
};

export const sendResetPasswordEmail = async (email, resetUrl) => {
    try {
        const info = await transporter.sendMail({
            from: "shivajirp123@gmail.com",
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
        });

        console.log("Reset password email sent successfully", info.messageId);
    } catch (error) {
        console.error("Error sending reset password mail", error);
        throw new Error("Error sending reset password mail");
    }
};

export const sendPasswordResetSuccess = async (email) => {
    try {
        const info = await transporter.sendMail({
            from: "shivajirp123@gmail.com",
            to: email,
            subject: "Your password has been reset successfully",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });

        console.log("Password reset success email sent", info.messageId);
    } catch (error) {
        console.error("Error sending reset-password-success mail", error);
        throw new Error("Error sending reset-password-success mail");
    }
};
