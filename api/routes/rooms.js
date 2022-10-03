import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();
router.post("/:hotelid",verifyAdmin,createRoom);
router.put('/updateRoom/:id', verifyAdmin, updateRoom)
router.get('/:id',getRoom);
router.get('/',getRooms);
router.delete('/delete/:hotelId/:id',verifyAdmin,deleteRoom);
export default router;
