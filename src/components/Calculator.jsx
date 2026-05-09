import React from 'react'

const Calculator = ({ theme, setTheme }) => {
  return (
    <section>
      <div
        className={`bg-screen-bg rounded-md w-full h-28 my-7 ${theme === 1 ? 'text-text-white' : 'text-text-dark'} text-[2.5rem] font-bold text-left flex items-center justify-end pr-5`}
      >
        233,300
      </div>
      <div className="bg-toggle-keypad-bg rounded-md p-5 grid grid-cols-[repeat(4,minmax(60px,90px))] gap-5 items-center justify-center">
        {[
          '7',
          '8',
          '9',
          'del',
          '4',
          '5',
          '6',
          '+',
          '1',
          '2',
          '3',
          '-',
          '.',
          '0',
          '/',
          'x',
          'reset',
          '=',
        ].map(val => (
          <button
            key={val}
            className={`uppercase  cursor-pointer p-3 transition-all duration-300 font-bold text-2xl rounded-md 
              ${val === 'reset' || val === '=' ? 'col-span-2 ' : 'col-span-1'} 
            ${val === 'reset' || val === 'del' ? 'bg-reset-del-key-bg shadow-[0_3px_0_0_var(--color-reset-del-key-shadow)] text-text-white' : val === '=' ? `bg-equal-key-bg shadow-[0_3px_0_0_var(--color-equal-key-shadow)] ${theme === 3 ? 'text-text-equal' : 'text-text-white'}` : `bg-key-bg  text-text-dark shadow-[0_3px_0_0_var(--color-key-shadow)]`} ${
              val === 'del' || val === 'reset' || val === '=' || theme === 3
                ? 'relative overflow-hidden before:absolute before:inset-0 before:bg-white before:opacity-0 hover:before:opacity-20 before:transition-opacity before:duration-300'
                : 'hover:bg-text-white'
            }`}
          >
            {val}
          </button>
        ))}
      </div>
    </section>
  )
}

export default Calculator
