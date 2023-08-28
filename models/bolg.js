import { default as mongoose } from "mongoose"

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        default:"title"
    },
    description:{
        type:String,
        required:true,
        default:"description"
    },
    links:{
        type:Array,
        required:true,
        default:["https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n"]
    },
    slug:{
        type:String,
        required:true,
        default:"slugs-default"
    },
    author:{
        type:String,
        required:true,
        default:"author"
    }
});

mongoose.models = {};
const data = new mongoose.model("blogdata" , schema);

module.exports = data;