//take note that all installations are from root folder and not in api directory
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

//added a collection name (jams-blog) which is written after --oxy7hd2.mongodb.net/--
mongoose.connect(process.env.MONGO)
.then(()=>{console.log('MongoDB is connected')}).catch((err)=>{console.log(err)})

const app = express();

app.listen(3000,()=>{
  console.log('Server is running in port 3000');
});

//best practice is to use routes folder and user /api/user/
app.use('/api/user', userRoutes);