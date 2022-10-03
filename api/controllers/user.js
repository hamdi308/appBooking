import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
     const updatedUser=await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    try {
        res.status(200).json(updatedUser);
    } catch (err) {
        next(err);
    }
}
export const getUser = async (req, res, next) => {
    try {
        const searchedUser= await User.findById(req.params.id);
        res.status(200).json(searchedUser);
    } catch (err) {
        next(err);
    }
}
export const deleteUser = async (req, res, next) => {
    const id_delete = req.params.id;
    await User.findByIdAndDelete(id_delete);
    try {
        res.status(200).json("User with id:" + id_delete + "has been deleted");
    } catch (err) {
        next(err);
    }
}
export const getUsers = async (req, res, next) => {
    //const failed = true;
    // if (failed) return next(createError(401,"you\'re Not authenticated!"));
    try {
        const allUsers=await User.find();
        res.status(200).json(allUsers);
    } catch (err) {
        next(err);
    }
}