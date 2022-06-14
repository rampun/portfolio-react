import { useEffect } from 'react'
import { useState } from 'react'

function useDarkMode() {
    const defaultTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    const [theme, setTheme] = useState(defaultTheme)
    const colorTheme = theme === "light" ? "dark" : "light"

  useEffect(()=>{

    const sunIcon = document.querySelector(".sun")
    const moonIcon = document.querySelector(".moon")
    
    const root = window.document.documentElement
    root.classList.add(theme)

    localStorage.setItem("theme",theme)
    root.classList.remove(colorTheme)

    // iconToggle();
    if(theme === 'dark')
    {
        sunIcon.classList.remove('hidden');
        moonIcon.classList.add('hidden');
    }
    else {
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    }
  }, [setTheme, colorTheme, theme])

  return[setTheme, colorTheme]
}

export default useDarkMode