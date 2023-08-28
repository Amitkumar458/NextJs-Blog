// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('../../connection/conn');
const data = require('../../models/bolg');

export default async function handler(req, res) {
    const getdata = await data.find({}).select("slug");
    var arr = [];
    for(let key in getdata){
        arr.push(getdata[key].slug);
    }
    res.status(200).json({data : arr});
}