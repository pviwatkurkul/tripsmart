import {User} from "../models/User.js";
import bcryptjs from  "bcryptjs";
import { generateVerificationToken } from "../utils/generateVerificationToken.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
export const signup = async (req,res) =>{
    const {email,password} = req.body;
    try{
        if(!email || !password){
            throw new Error("All fields are required");
        }
        const userAlreadyExists = await User.findOne({email});
        if(userAlreadyExists) {
            return res.status(400).json({success:false, message: "User already exists"});
        }

        const hashedPassword = await bcryptjs.hash(password,10);
        const verificationToken = generateVerificationToken();

        const user = new User({
            email,
            password: hashedPassword,
            verificationToken,
            verificationTokenExpiresAt: (Date.now() + 24 * 60 * 60 * 1000)
        });

        await user.save();

        //jwt
        generateTokenAndSetCookie(res, user._id);

        sendVerificationEmail(user.email, verificationToken);
        
        res.status(201).json({
            success:true,
            message: "User created successfully",
            user:{
                ...user._doc,
                password: undefined
            }
        });
    } catch(error){
        res.status(400).json({sucess:false, message: error.message});
    }

}

export const login = async (req,res) =>{
    res.send("login route");
    
}

export const logout = async (req,res) =>{
    res.send("logout route");
    
}

