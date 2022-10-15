import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createError } from "../utils/error.js";
export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            password:hash,
        });
        const savedNewUser = await newUser.save();
        res.status(200).json(savedNewUser);
    } catch (err) {
        next(err);
    }
}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, "User Not Found!"));
        const isPasswordTrue = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordTrue) return next(createError(400, "Wrong password or username!"));
        const token=jwt.sign({id:user._id,username:user.username,email:user.email,password:user.password,isAdmin:user.isAdmin},process.env.JWT_SECRET_KEY)
        const { password, isAdmin, ...otherDetails } = user._doc;
        res.cookie("acess_token", token, {httpOnly:true,}).status(200).json({password,...otherDetails});
    } catch (err) {
        next(err);
    }
}