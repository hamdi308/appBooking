import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
const router = express.Router();
/*router.get('/checkauthentification', verifyToken, (req, res, next) => {
    res.send("Welcome");
})
router.get('/checkuser/:id',verifyUser, (req, res, next) => {
    res.send("you're eligebale to delete account");
})
router.get('/checkadmin/:id',verifyAdmin, (req, res, next) => {
    res.send("hello Admin");
})*/
router.put('/update/:id',verifyUser,updateUser)
router.get('/:id',verifyUser,getUser);
router.get('/',verifyUser,getUsers);
router.delete('/delete/:id',verifyAdmin,deleteUser);
export default router;