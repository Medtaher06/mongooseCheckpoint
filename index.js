import mongoose from "mongoose";
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import usersRoute from "./Routes/Users";

const app = express();



app.use(bodyParser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.use('/Users', usersRoute)



const mongoUrl ="mongodb+srv://taher:NO0cwwJCvqDy6A3p@cluster0.vmbkp.mongodb.net/mySecondeDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUrl).then(() =>{

    console.log('database connected successfully ');
    app.listen(8080,(req,res) => {
        console.log('server running on port 8081')
    })

} )
.catch(err =>{
    console.error('Database connection error'+ err.message);
})