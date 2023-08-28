const fs = require('fs');
require('../../connection/conn');
const data = require('../../models/contact');

export default async function handler (req, res) {
    if (req.method === 'POST') {
        const d = JSON.parse(req.body);
        const getdata = new data({
            name:d.name,
            phone:d.phone,
            query:d.query
        });
        try {
            await getdata.save()
            res.status(200).json({status : 1});
        } catch (error) {
            res.status(500).json({status : 0});
        }
    } else {
        res.status(200).json({status : 0});
    }
  }
