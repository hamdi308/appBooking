import express from 'express';
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();
router.post("/",verifyAdmin,createHotel);
router.put('/update/:id',verifyAdmin,updateHotel)
router.get('/:id',getHotel);
router.get('/',getHotels);
router.delete('/delete/:id',verifyAdmin,deleteHotel);
export default router