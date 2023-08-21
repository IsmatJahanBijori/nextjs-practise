// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';
export default function handler(req, res) {
  // http://localhost:3000/api/getBlog?slug=blog1
  fs.readFile(`blogdata/${req.query.slug}.json`,"utf-8", (err, data) => {
    if (err) {
        res.status(400).json({error:"Blog Not Found"})
    };
    console.log(req.query.slug)
    res.status(200).json(JSON.parse(data))
  })
  
}
