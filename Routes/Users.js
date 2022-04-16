import express from "express";
import UsersModel from "../Model/UsersModel";
import UserSchema from '../Model/UsersModel';
const UsersRoute = express.Router();




UsersRoute.post('/add',(req, res) =>{
    
        let newUser = UserSchema(req.body);
        newUser.save();
        console.log('add new user');
        res.status(200).json(newUser);
})

UsersRoute.get('/', async (req, res)  =>{
  let allUsers = await  UsersModel.find();
  res.status(200).json(allUsers);
  
})


export default UsersRoute ;
