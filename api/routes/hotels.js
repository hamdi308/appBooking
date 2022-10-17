import express from 'express';
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel ,countByType, getHotelRooms} from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();
router.post("/",verifyAdmin,createHotel);
router.put('/update/:id',verifyAdmin,updateHotel)
router.get('/find/:id',getHotel);
router.get('/', getHotels);
router.get('/countByCity',countByCity);
router.get('/countByType',countByType);
router.delete('/delete/:id', verifyAdmin, deleteHotel);
router.get('/room/:id',getHotelRooms)
export default router