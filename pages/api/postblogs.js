require('../../connection/conn');
const data = require('../../models/bolg');

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const jsondata = JSON.parse(req.body);
        var t = jsondata.title;
        var ts = t.split(" ");
        t = ts.join('-');
        var ply = [];
        jsondata.playlist.forEach(element => {
            var sp = element.split('playlist?');
            if(sp.length == 1){
                sp = element.split('/');
                str = "https://www.youtube.com/embed/" + sp[sp.length-1];
                ply.push(str);
            }else{
                var str = "https://www.youtube.com/embed/videoseries?" + sp[1];
                ply.push(str);
            }
        });
        var d = {
            title : jsondata.title,
            description : jsondata.description,
            links : ply,
            slug : t,
            author : jsondata.author
        }
        try {
            const getdata = new data(d);
            await getdata.save();
            res.status(200).json({status : 1});
        } catch (error) {
            res.status(500).json({status : 0});
        }
    } else {
        res.status(200).json({status : 0});
    }
}
