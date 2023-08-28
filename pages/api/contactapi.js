// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require('fs');
require('../../connection/conn');
const data = require('../../models/contact');

export default async function handler(req, res) {
    const getdata = await data.find();
    res.status(200).json(getdata);
}
