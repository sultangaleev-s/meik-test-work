import React, { InputHTMLAttributes } from 'react'
import './radio.scss'

interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  id: string,
}

export const Radio = ({label, id, ...props}: IRadio) => {
  return (
    <div className="radio">
      <input type="radio" id={id} {...props}/>
      <label htmlFor={id}>{label}</label>    
  </div>
  )
}
