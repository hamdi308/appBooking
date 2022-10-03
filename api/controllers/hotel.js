import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = newHotel.save();
        return res.status(200).json(savedHotel);
    } catch (err) {
        next(err);
    }
};
export const updateHotel = async (req, res, next) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    try {
        res.status(200).json(updatedHotel);
    } catch (err) {
        next(err);
    }
};
export const getHotel = async (req, res, next) => {
    try {
        const searchedHotel = await Hotel.findById(req.params.id);
        res.status(200).json(searchedHotel);
    } catch (err) {
        next(err);
    }
};
export const deleteHotel = async (req, res, next) => {
    const id_delete = req.params.id;
    await Hotel.findByIdAndDelete(id_delete);
    try {
        res.status(200).json("hotel with id:" + id_delete + "has been deleted");
    } catch (err) {
        next(err);
    }
};
export const getHotels = async (req, res, next) => {
    //const failed = true;
    // if (failed) return next(createError(401,"you\'re Not authenticated!"));
    try {
        const allhotels = await Hotel.find();
        res.status(200).json(allhotels);
    } catch (err) {
        next(err);
    }
};