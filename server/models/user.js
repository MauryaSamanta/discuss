import pkg from 'mongoose';
const {Schema, model,models}=pkg;
import {hash} from 'bcrypt';
const schema=new Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        public_id:{
            type:String,
        required:true,
        },
        url:{
            type:String,
            required:true, 
        }
    }

},{
    timestamps:true,
});
schema.pre("save", async function(){
    if(!this.isModified("password")) next();
    this.password=await hash(this.password,10);
})

export const User=models.User || model("User", schema);