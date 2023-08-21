// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import * as fs from 'node:fs';
// export default function handler(req, res) {
//finding all file
//http://localhost:3000/api/blogs
//   fs.readdir('blogdata', (err, data) => {
//     if (err) throw err;

//     res.status(200).json(data)
//   })
  
// }


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'node:fs';
export default async function handler(req, res) {
//finding all file
 let data=await fs.promises.readdir("blogdata")
//  let myFile;
//http://localhost:3000/api/blogs
//  console.log("folder",data)
 let allBlogs=[];
 for (let index = 0; index < data.length; index++) {
  const item = data[index];
//   console.log("file",item)
  let myFile=await fs.promises.readFile(("blogdata/" +item),"utf-8");
//   console.log(myFile)
  allBlogs.push(JSON.parse(myFile))
 }
 res.status(200).json(allBlogs)
}