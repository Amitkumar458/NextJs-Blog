import { mongoose } from "mongoose";

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        default:"name"
    },
    phone:{
        type:Number,
        required:true,
        default:12345
    },
    query:{
        type:String,
        required:true,
        default:"query"
    }
});

mongoose.models = {};
const data = new mongoose.model("contactdata" , schema);

module.exports = data;
