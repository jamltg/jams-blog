//take note that all installations are from root folder and not in api directory
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

//added a collection name (jams-blog) which is written after --oxy7hd2.mongodb.net/--
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('MongoDB is connected')}).catch((err)=>{console.log(err)})

const app = express();

//this code is to allow to send json to the backend
app.use(express.json());

app.listen(3000,()=>{
  console.log('Server is running in port 3000');
});

//best practice is to use routes folder and use /api/user/
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


//middleware
app.use((err,req,res,next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success:false,
    statusCode,
    message
  });
});