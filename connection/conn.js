import { default as mongoose } from 'mongoose';

let conn = async () => {
    await mongoose.connect(process.env.MONGODB , {})
    .then(() => {
        console.log("connected successfully");
    })
    .catch((e) => {
        console.log(e);
    });
}

conn();