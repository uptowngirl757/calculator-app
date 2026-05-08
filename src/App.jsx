import React from 'react'
import { useState, useEffect } from 'react'
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
        <div
          className={`flex justify-between w-full ${theme === 1 ? 'text-text-white' : 'text-text-dark'}`}
        >
          <h1 className="font-bold text-2xl self-end">calc</h1>
          <div className="flex gap-5 font-semibold">
            <p className="font-bold uppercase self-end">Theme</p>
            <div className="flex flex-col w-17 gap-2">
              <div className="flex w-full justify-between ">
                {[1, 2, 3].map(num => (
                  <span
                    key={num}
                    onClick={() => setTheme(num)}
                    className="cursor-pointer"
                  >
                    {num}
                  </span>
                ))}
              </div>
              <div className="h-6 w-full rounded-xl bg-toggle-keypad-bg relative p-1">
                <div
                  className={`absolute top-1/2 left-1 -translate-y-1/2 h-4 w-4 rounded-full bg-equal-key-bg transition-transform duration-200 ${
                    theme === 1
                      ? 'translate-x-0'
                      : theme === 2
                        ? 'translate-x-5.5'
                        : 'translate-x-11'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
