import React, {FormEvent, InputHTMLAttributes, useState} from 'react'
import './input.scss'

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string,
  errorMessage: string,
  value?: string,
  state?: 'hover' | 'active' | 'invalid',
}

export const Input = ({placeholder, errorMessage, value, state, ...props}:IInput) => {
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{1,})$/iu;

  const [valueState, setValueState] = useState(value ? value : '')
  const [isValid, setValid] = useState(true)

  const handler = (e: FormEvent<HTMLInputElement>) => {
    setValueState(e.currentTarget.value)
    if (valueState.length <= 1) {
      return setValid(true)
    }
    setValid(()=>EMAIL_REGEXP.test(valueState))
  } 

  return (
    <div className={state ? `input-box input-box--${state}` : isValid ? "input-box" : "input-box input-box--invalid"}>
          <input 
          type="text" 
          value={value}
          onChange={handler}
          {...props}
          />
          <span className="input-box__placeholder">{placeholder}</span>
          <span className="input-box__error">{errorMessage}</span>
      </div>
  )
}
