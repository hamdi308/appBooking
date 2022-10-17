import Hotel from "../models/Hotel.js";
import Room from '../models/Room.js';

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = newHotel.save();
        return res.status(200).json(savedHotel);
    } catch (err) {
         (err);
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
    const { min, max, ...others } = req.query;
    try {
        const allhotels = await Hotel.find({...others,cheapestPrice:{$gt:min |1,$lt:max || 999}}).limit(req.query.limit)
        res.status(200).json(allhotels);
    } catch (err) {
        next(err);
    }
};
export const countByCity = async (req, res, next) => {
    try {
        const cities = req.query.cities.split(',');
        const list = await Promise.all(cities.map((city) => {
            return Hotel.countDocuments({ city: city });
        }))
        res.status(200).json(list);
    } catch (err) {
        next(err);
    }
};
export const countByType = async (req, res, next) => {
    try{
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartments" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });
   res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
   ]);
        
  } catch (err) {
    next(err);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list =await Promise.all(
      hotel.rooms.map((room) => {
          return Room.findById(room);
      })
    );
      res.status(200).json(list)
      console.log(list);
  } catch (err) {
    next(err);
    }
};