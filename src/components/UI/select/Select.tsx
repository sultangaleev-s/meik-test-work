import React, {MouseEvent, useState } from 'react'
import './select.scss'

interface ISelect {
  options: string[],
  title: string,
  state?: 'active',
}

export const Select = ({options, title, state}:ISelect) => {

  const [isOpen, setOpen] = useState(false);
  const [result, setResult] = useState(title)

  const toggleHandler = () => {
    setOpen(!isOpen)
  }

  const choiceResult = (e:MouseEvent<HTMLElement>) => {
    if (e.currentTarget.textContent) {
      setResult(e.currentTarget.textContent)
      setOpen(false)
    }
  }

  return (
    <div className={state ? `select select--${state}` : isOpen ? "select select--active" : "select"}>
        <button 
        className="select__header"
        onClick={toggleHandler}
        >
            <span className="select__result">{result}</span>
            <span className="select__icon"></span>
        </button>
        <div className="select__body">
            {
              options.map(option => (
                <button 
                className={result === option ? "select__option select__option--active" : "select__option"} 
                onClick={choiceResult} 
                key={option}>
                  {option}
                </button>
              ))
            }
        </div>
    </div>
  )
}
