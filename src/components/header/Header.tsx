import React, {useState} from 'react';
import { BurgerMenu } from './burger-menu/BurgerMenu';
import './header.scss';

export const Header:React.FC = () => {
    const [isOpen, setOpen] = useState(false);

    const openHandler = () => {
        setOpen(true)
    }

    const closeHandler = () => {
        setOpen(false)
    }

  return (
    <header className="header">
          <div className="container header__container">
              <div className="logo header__logo">
                  <img src="./img/logo.png" alt="logo" className="logo__img" />
                  <div className="logo__info">
                      <p className="logo__title">Султангалеев</p>
                      <p className="logo__subtitle">Сергей Андреевич</p>
                  </div>
              </div>
              <button
                  className="burger header__burger"
                  onClick={openHandler}
              >
                  <span className="burger__line"></span>
                  <span className="burger__line"></span>
              </button>
          </div>

            {
                isOpen && (
                    <BurgerMenu closeHandler={closeHandler}/>
                )
            }
      </header>
    )
}
