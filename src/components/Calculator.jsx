import React from 'react'

const Calculator = ({ theme, setTheme }) => {
  return (
    <section>
      <div
        className={`bg-screen-bg rounded-md w-full h-28 my-7 ${theme === 1 ? 'text-text-white' : 'text-text-dark'} text-[2.5rem] font-bold text-left flex items-center justify-end pr-5`}
      >
        233,300
      </div>
    </section>
  )
}

export default Calculator
