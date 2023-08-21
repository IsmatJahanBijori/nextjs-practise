import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from "../../styles/blog1.module.css"
import Link from 'next/link'
import * as fs from 'node:fs';


const Slug = (props) => {
  //http://localhost:3000/api/getBlog?slug=blog1
  console.log(props)
  const [blog, setBlog] = useState(props.blog)
  //1 no way
  // const router = useRouter()
  // const { slug } = router.query
  // useEffect(() => {
  //   if (!router.isReady) return
  //   const { slug } = router.query
  //   fetch(`http://localhost:3000/api/getBlog?slug=${slug}`).then(res => res.json()).then(data => setBlog(data))
  // }, [router.isReady])
  return (
    <div className={styles.blog}>
      <h1>{blog && blog.title}</h1>
      <p>{blog && blog.description}</p>
      <Link href='/blog'>back</Link>
    </div>
  )
}

//2no way
//server side rendering
// export async function getServerSideProps(context) {

//   const { slug } = context.query
//   let data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
//   let blog = await data.json()

//   return { props: { blog } }
// }


//3no way
//static site generation
export async function getStaticPaths(context) {

  return {
    paths: [{params:{ slug: "blog1" }}, {params:{ slug: "blog2" }}, {params:{ slug: "blog3" }}, //paths declared statically.
    ],
    fallback: true,
  }
}

//static site generation
export async function getStaticProps(context) {
  console.log("slug theke", context.params)

  const { slug } = context.params
  let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
  // let blog = await data.json()
  return { props: { blog: JSON.parse(blog) } }
}
export default Slug
