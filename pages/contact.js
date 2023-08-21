import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const onChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value)
    }
    else if (e.target.name === "email") {
      setEmail(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log(name, email)
    setName("")
    setEmail("")
    const _data = { name, email }
    fetch('http://localhost:3000/api/postContact', {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(_data),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/postContact").then(res => res.json()).then(data => console.log(data))
  // }, [])


  return (
    <section className="text-gray-600 body-font">
      <form onSubmit={handleSubmit} className="container bg-gray-100 rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-20">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
          <input type="text" id="name" onChange={onChange} name="name" value={name} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" onChange={onChange} value={email} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button className="text-white md:w-1/3 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <p className="text-xs text-gray-500 mt-3">Literally you probably have not heard of them jean shorts.</p>
      </form>
    </section>
  )
}

export default Contact
