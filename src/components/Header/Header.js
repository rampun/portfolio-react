import React from 'react'
import Logo from '../../assets/images/logo.svg'
import LogoWhite from '../../assets/images/logo-white.svg'
import { Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode'
import Resume from '../../assets/resources/resume.pdf'

const Header = () => {

  const [setTheme, colorTheme] = useDarkMode()

  return <>
     <header className='dark:bg-dark'>
        <nav className='p-4 max-w-7xl mx-auto flex justify-between items-center align-middle'>
            <Link to="/">
              <img className='w-16 dark:hidden' src={Logo} alt="Logo"/>
              <img className='w-16 hidden dark:flex' src={LogoWhite} alt="Logo"/>
            </Link>
            <ul className='flex space-x-6 items-center'>
                <li><Link to="/works" className="dark:text-white" >works</Link> </li>
                <li><Link to="/about" className="dark:text-white" >about</Link></li>
                <li className="border border-blue px-3 py-1 dark:text-white dark:border-white"><a rel="noreferrer" target="_blank" href={Resume}>resume</a></li>
                <li className="cursor-pointer">
                  <div className='block moon' onClick={()=> setTheme(colorTheme)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  </div> 

                  <div className='block sun' onClick={()=> setTheme(colorTheme)}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div> 
                </li>

            </ul>
        </nav>
    </header>
  </>
}

export default Header