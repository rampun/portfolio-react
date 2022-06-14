import React from 'react'

const SayHello = () => {
  return <>
  <section className='dark:bg-dark border-b px-4 py-10 bg:border-0'>
    <div className='max-w-7xl m-auto flex justify-center mt-10 md:mt-20'>
      <h2 className='dark:text-white'>Get In &nbsp;<span className="highlight z-10">Touch</span></h2>
    </div>
    <div className='max-w-3xl mx-auto flex justify-center text-center mt-3 lg:mt-6 '>
      <p className='dark:text-white'> 
      Whether you have an idea for a project or just want to chat, feel free to shoot me an email!
      </p>
    </div>
    <div className=' flex justify-center mt-6'>
      <a href="mailto:hello@example.com" className="transparent_button dark:text-white dark:border-white">
      say hello
      </a>
    </div>
  </section>
  </>
}

export default SayHello