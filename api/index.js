import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
const app = express();
dotenv.config();
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
  connectTimeoutMS: 1000
});
        console.log("connected to MongoDB");
    }
    catch (error) {
        throw error;
    }
};
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected");
})
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected");
})
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotel', hotelRoute);
app.use('/api/rooms', roomsRoute);
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went Wrong !";
    return res.status(errorStatus).json({
        sucess: false,
        status: errorStatus,
        message: errorMessage,
        stack:err.stack,
    });
});
app.listen('8800', () => {
    connect();
    console.log('connected to localhost:8800');
});