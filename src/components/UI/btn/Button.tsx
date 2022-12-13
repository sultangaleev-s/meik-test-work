import React, { ButtonHTMLAttributes } from 'react'
import './button.scss'

interface IButton  extends ButtonHTMLAttributes<HTMLButtonElement>{
  state?: 'hover' | 'active'
  text: string
}

export const Button = ({state, text, ...props}:IButton) => {
  return (
    <button 
    className={state ? `button button--${state}` : 'button'} 
    {...props}
    >
      {text}
    </button>
  )
}
