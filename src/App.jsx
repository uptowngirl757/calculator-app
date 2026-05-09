import React from 'react'
import { useState, useEffect } from 'react'
import ThemeSwitcher from './components/ThemeSwitcher'
import Calculator from './components/Calculator'

const App = () => {
  const [theme, setTheme] = useState(1)

  useEffect(() => {
    const themeMap = {
      1: 'default',
      2: 'light',
      3: 'neon',
    }
    document.documentElement.setAttribute('data-theme', themeMap[theme])
  }, [theme])
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-xl w-full">
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
        <Calculator theme={theme} setTheme={setTheme} />
      </div>
    </div>
  )
}

export default App
