import React, {useState} from 'react'
import './accardeon.scss'

interface IAccardeon {
  title: string,
  text: string,
}

export const Accardeon = ({title, text}:IAccardeon) => {

  const [isOpen, setOpen] = useState(false);

  const toggleHandler = () => {
    setOpen(!isOpen);
  }
  return (
    <div className={isOpen ? "accardeon active" : "accardeon"}>
        <button 
        className="accardeon__info"
        onClick={toggleHandler}
        >
        {title}
        <span className="accardeon__icon"></span>
        </button>
        {
          isOpen && (
          <p className="accardeon__text">
            {text}
          </p>
          )
        }
    </div>
  )
}

