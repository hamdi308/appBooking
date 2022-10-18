import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateAvailability, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();
router.post("/:hotelid",verifyAdmin,createRoom);
router.put('/updateRoom/:id', verifyAdmin, updateRoom)
router.put('/update/availability/:id', updateAvailability)
router.get('/', getRooms);
router.get('/:id',getRoom);
router.delete('/delete/:hotelId/:id',verifyAdmin,deleteRoom);
export default router;
