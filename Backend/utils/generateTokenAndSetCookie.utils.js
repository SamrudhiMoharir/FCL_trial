import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign(
        {userId},
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    )
    
    const options = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict", //csrf
        maxAge: 7 * 24 * 60 * 60 * 1000,
    }

    res.cookie("token", token, options)

    return token;
}