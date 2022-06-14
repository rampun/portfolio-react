import React from 'react'
import LinkedIn from '../../assets/icons/linkedin.svg'
import LinkedInWhite from '../../assets/icons/linkedin-white.svg'
import Twitter from '../../assets/icons/twitter.svg'
import TwitterWhite from '../../assets/icons/twitter-white.svg'

const Footer = () => {
  return <>
  <footer className='dark:bg-dark'>
        <div className='max-w-7xl mx-auto pt-8 md:pt-16 flex flex-col justify-center items-center pb-10'>
          <h4 className='text-lg dark:text-white'>Let's connect!</h4>
          <div className='flex space-x-3 mt-2'>
            <a href='https://linkedin.com' className='dark:hidden'>
              <img className='w-4' src={LinkedIn} alt='LinkedIn' />
            </a>
            <a href='https://linkedin.com' className='hidden dark:inline-block'>
              <img className='w-4' src={LinkedInWhite} alt='LinkedIn' />
            </a>
            <a href='https://twitter.com' className='dark:hidden'>
              <img className='w-4' src={Twitter} alt='Twitter' />
            </a>
            <a href='https://twitter.com' className='hidden dark:inline-block'>
              <img className='w-4' src={TwitterWhite} alt='Twitter' />
            </a>
              {/* <SocialIcon icon={LinkedIn} alt="LinkedIn" link="https://linkedin.com"/>
              <SocialIcon icon={LinkedInWhite} alt="LinkedIn" link="https://linkedin.com"/> */}
              {/* <SocialIcon icon={Twitter} alt="Twitter" link="https://twitter.com"/> */}
              {/* <SocialIcon icon={Github} alt="Github" link="https://github.com"/>
              <SocialIcon icon={Mail} alt="Mail" link="mailto:hello@example.com"/> */}


          </div>
          <p className='text-sm mt-8 dark:text-white'>
              Designed &amp; Built by John Smith
          </p>
        </div>
    </footer>
  </>
}

export default Footer