import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorHandler } from '../utils/error.js';

export const signup = async (req,res,next)=>{
  const { username, email, password } = req.body;

  if (
    !username || 
    !email || 
    !password || 
    username === '' || 
    email === '' || 
    password === ''
  ) {
    next(errorHandler(400,'All fields are required'));
  }

  const hashedPassword = bcryptjs.hashSync(password,10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json('Signup successful');
  } catch (err) {
    next(err);
  }
};


export const signin = async (req, res, next) => {
  const {email, password} = req.body;

  if (!email || !password || email === '' || password === ''){
    next(errorHandler(400,'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser){
      return next(errorHandler(404, 'User not Found'));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword){
      return next(errorHandler(400, 'Invalid Password'));
    }

    //to authenticate the user we need jsonwebtoken
    //save the encrypted value to the cookie of the browser 
    
    const token = jwt.sign(
      //_id is from mongodb (check collection)
      {id: validUser._id}, process.env.JWT_SECRET
    );

    //we need to separate password since it sends an object containing hashed password
    //password is already used so we use pass instead
    const {password:pass, ...rest} = validUser._doc;

    res.status(200).cookie('access_token', token, {httpOnly: true}).json(rest);
  } catch(err){
    next(err);
  }
}