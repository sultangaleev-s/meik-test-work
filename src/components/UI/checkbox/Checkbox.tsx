import React, { InputHTMLAttributes } from 'react';
import './checkbox.scss';

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label: string,
  id: string,
}

export const Checkbox = ({label, id, ...props}:ICheckbox) => {
  return (
    <div className="checkbox">
        <input type="checkbox" id={id} {...props}/>
        <label htmlFor={id}>
            {label}
        </label>
    </div>
  )
}
