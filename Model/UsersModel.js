import mongoose from "mongoose"; 
const UserSchema = mongoose.Schema({
    Name:{type:String , required:true},
    phoneNumber:{type:Number , required:true},
    age:{type:Number , required:true},
   favoriteFood:{type:Array, required:true}
})

export default mongoose.model('User', UserSchema , 'users');
