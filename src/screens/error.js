import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'


const Error = () => {
  return (
    <Layout>
        <div className='max-w-7xl m-auto mt-16 flex flex-col items-center'>
          <h3> Aw, Snap! Page not found</h3>
          <Link to="/" className='transparent_button mt-4'>Home Page</Link>
        </div>
    </Layout>
  )
}

export default Error