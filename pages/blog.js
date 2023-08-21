// import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from "../styles/blog1.module.css"
import Link from 'next/link';
import * as fs from 'node:fs';


const Blog = (props) => {
  console.log("6 blog", props)
  const [blogs, setBlogs] = useState(props.allBlogs)
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs").then(res => res.json()).then(data => setBlogs(data))
  // }, []);
  return (
    <div className={styles.blog}>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably have not heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
          </div>
        </div>
        {
          blogs.map((item, index) =>
            <div className='flex flex-row' key={index}>
              <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">{item.title}</h2>
                <p className="leading-relaxed text-base mb-4">{item.description.substring(0, 20)}<Link href={`/blogpost/${item.slug}`} className="text-indigo-500 inline-flex items-center">...Learn More
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </Link></p>

              </div>
            </div>
          )
        }

      </section>
    </div>
  )
}

//getServerSideProps()
//server side rendering

//it is running in server side
// export async function getServerSideProps(context) {

//   let data = await fetch("http://localhost:3000/api/blogs")
//   let allBlogs = await data.json()
//   return { props: { allBlogs } }
// }




//static site generation


export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata")
  //  let myFile;
  //http://localhost:3000/api/blogs
  // console.log("folder", data)
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    // console.log("file", item)
    let myFile = await fs.promises.readFile(("blogdata/" + item), "utf-8");
    // console.log(myFile)
    allBlogs.push(JSON.parse(myFile))
  }
  return { props: { allBlogs } }
}
export default Blog;

