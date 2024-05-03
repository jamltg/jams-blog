//take note that all installations are from root folder and not in api directory
import express from 'express';

const app = express();

app.listen(3000,()=>{
  console.log('Server is running in port 3000');
})