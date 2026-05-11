import React, { useState } from 'react'

const Calculator = ({ theme, setTheme }) => {
  const [result, setResult] = useState('')
  const [operator, setOperator] = useState('')
  const [prevInput, setPrevInput] = useState('')
  const [currentInput, setCurrentInput] = useState('')

  const handleClick = val => {
    // Number and Decimals
    if (!isNaN(val) || val === '.') {
      if (result) {
        setResult('')
        setCurrentInput('')
      }
      setCurrentInput(prev => prev + val)
      return
    }
    // Operators
    if (['x', '-', '+', '/'].includes(val)) {
      if (currentInput) {
        setPrevInput(currentInput)
        setCurrentInput('')
      }
      setOperator(val)
      return
    }
    if (val === 'reset') {
      setOperator('')
      setCurrentInput('')
      setPrevInput('')
      setResult('')
      return
    }
    if (val === 'del') {
      // setCurrentInput(currentInput.slice(0, -1))
      currentInput
        ? setCurrentInput(currentInput.slice(0, -1))
        : operator
          ? setOperator('')
          : prevInput
            ? setPrevInput(prevInput.slice(0, -1))
            : ''
      return
    }
    if (val === '=') {
      let res
      const a = Number(prevInput)
      const b = Number(currentInput)
      if (operator === '+') {
        res = a + b
      } else if (operator === '-') {
        res = a - b
      } else if (operator === 'x') {
        res = a * b
      } else if (operator === '/') {
        if (b === 0) {
          res = 'Error'
        } else {
          res = a / b
        }
      }
      setResult(res)
      setCurrentInput(res)
      setPrevInput('')
      setOperator('')
    }
  }

  return (
    <section>
      <div
        className={`bg-screen-bg outline-none focus:outline-none focus:ring-0 rounded-md w-full h-28 my-7 ${theme === 1 ? 'text-text-white' : 'text-text-dark'} text-[2.5rem] font-bold text-right pr-5 p-4 flex justify-end items-center`}
      >
        {currentInput || operator || prevInput || result || 0}
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
            onClick={() => handleClick(val)}
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
