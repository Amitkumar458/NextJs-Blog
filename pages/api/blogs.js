// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('../../connection/conn');
const data = require('../../models/bolg');

export default async function handler(req, res) {
    const p = req.query.slugs;
    const d = await data.find({slug:p});
    res.status(200).json(d);
}
