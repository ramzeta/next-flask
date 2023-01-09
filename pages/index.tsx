import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [credentials, setCredentials] = useState({
    username: 'Yasoob',
    email: '',
    password: 'strongpassword'
  })

  const handleChange = (e: any) => {
    e.preventDefault()
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
    //console.log(e.target.value, e.target.name)
  }

  const handleOnSubmit = async (e: any) => {
    e.preventDefault();
    console.log(credentials);
    const response = await axios.post("http://localhost:5000/api/login",credentials)
    console.log(response)

  }
  return (
    <>
      <div>
        <form method='POST' onSubmit={handleOnSubmit}>


          <input
            type="username"
            name="username"
            id="username"
            placeholder='username'
            onChange={handleChange} />


          <input
            type="email"
            name="email"
            id="email"
            placeholder='email'
            onChange={handleChange} />

          <input
            type="password"
            name="password"
            id="pasword"
            placeholder='password'
            onChange={handleChange} />

          <button>Login</button>
        </form>
      </div>
    </>
  )
}
