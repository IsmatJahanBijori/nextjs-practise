import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div>
      <Head>
        <title>First App</title>
      </Head>
      {/*style jsx */}
      <style jsx>
      {`
      .my{
        color:blue;
        font-size: 30px;
      }
      `}
      </style>
      
    </div>

  )
}

export default index
