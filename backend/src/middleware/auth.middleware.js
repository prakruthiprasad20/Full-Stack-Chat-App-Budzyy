import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// protectRoute middleware function; to protect certain routes that require authentication eg: to update profile 
export const protectRoute=async(req, res, next) => {
    try {
const token = req.cookies.jwt;

if(!token) {
    return res.status(401).json({message:
        "Unauthorized! No token provided. Please login to access this resource."})
    
}
const decoded = jwt.verify(token, process.env.JWT_SECRET);

if(!decoded) {
    return res.status(401).json({message:
        "Unauthorized-Invalid Token. Please login!"
    });
}

// find user in db

const user = await User.findById(decoded.userId).select("-password");

if(!user) {
    return res.status(404).json({message:
        "User not found!"
    });

}

req.user=user
next();


    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        res.status(500).json({message: "Internal server error"})

    }
}