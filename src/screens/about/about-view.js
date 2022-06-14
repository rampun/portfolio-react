import React from 'react'
import Layout from '../../components/Layout/Layout'
import ProfileImage from '../../assets/images/profile.jpeg'
import {Helmet} from 'react-helmet'

const AboutView = () => {
  return <>
    <Layout>
    
        <Helmet>
            <meta charSet="utf-8" />
            <title>About me</title>
        </Helmet>
      <div className='px-4 max-w-7xl m-auto flex gap-10 flex-col-reverse md:flex-row md:gap-20'>
        <div className='w-full md:w-3/5 text-justify'>
            <h2 className= 'inline-block highlight mb-3 dark:text-white z-10'>About Me</h2>
            <p>
            Hi, my name is <strong>John Smith</strong> and I am a <strong>Full-Stack Web Developer</strong> with over 5+ years corporate/agency experience in both Frontend and Backend web development. 
            </p>
            <br />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </p>
            <br/>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
            </p>
            <br />
            <p>
              Here are a few technologies I've been working with recently
            </p>
            <ul className='about-tech custom-list flex flex-wrap gap-5 p-0 mt-3'>
            <li className='pl-4 relative'>JavaScript</li>
              <li className='pl-4 relative'>TypeScript</li>
              <li className='pl-4 relative'>React</li>
              <li className='pl-4 relative'>Node.js</li>
              <li className='pl-4 relative'>Laravel</li>
              <li className='pl-4 relative'>Wordpress</li>
            </ul>

        </div>
        <div className='w-full md:w-2/5'>
        <img src={ProfileImage} className="shadow-2xl" alt="Profile" />
        </div>
      </div>

      {/* Where Ive worked section */}
      <div className='max-w-7xl m-auto px-4 mt-16 md:mt-24'>
          <h2> Where I've &nbsp; <span className= 'inline-block highlight z-10'>Worked </span></h2>
          <div className='mt-4'>
              <div className='mb-10 md:mb-16'>
              <h3 className='mt-2'>Abc company</h3>
                <p className='mt-2'>Senior Web Developer   •   Jan 2022 - Present</p>
                <ul className='mt-2 custom-list'>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
              </div>
              <div className='mb-10 md:mb-16'>
              <h3 className='mt-2'>Def company</h3>
                <p className='mt-2'>Web Developer   •   Jan 2020 - Dec 2022</p>
                <ul className='mt-2 custom-list'>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
              </div>
              <div className='mb-10 md:mb-16'>
              <h3 className='mt-2'>Ghi company</h3>
                <p className='mt-2'>Web Developer   •   Jan 2020 - Dec 2022</p>
                <ul className='mt-2 custom-list'>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                  <li className='pl-4 relative'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                </ul>
              </div>
          </div>
        </div>
    </Layout>
  </>
}

export default AboutView