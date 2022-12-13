import React from 'react'
import './burger-menu.scss'

interface IBurgerMenu {
    closeHandler: () => void;
}

export const BurgerMenu = ({closeHandler}:IBurgerMenu) => {
  return (
    <div className="burger-menu">
        <button 
        className="burger-menu__close"
        onClick={closeHandler}
        />
        <div className="burger-menu__info">
            <div className="burger-menu__info-left">
                <img src="./img/logo.png" alt="logo" className="burger-menu__logo"/>
                </div>
            <div className="burger-menu__info-right">
                <div>
                    <p className="burger-menu__head-text">Задание выполнил</p>
                    <h2 className="burger-menu__header">
                        Султангалеев<br/>
                            Сергей Андреевич
                        </h2>
                    <p className="burger-menu__text">
                        Образование среднее профессиональное, специальность: оператор нефтяных и газовых скважин.Опыта работы разработчиком не имею.Обучаюсь сам почти 6 месяцев по специальности frontend разработчик, за время обучения прошел курсы: <br/>
                            <span>Верстка сайтов</span><span>Язык программирования JavaScript</span><span>Разработка на React.</span>
                            Так же использовал в работе: Redux, TypeScript, API, Bootstrap, React-router-dom, axios, БЭМ, SASS, Gulp, npm, git.
                        </p>
                    <h4 className="burger-menu__number">+7 (993) 917-05-33</h4>
                </div>
                <a href="https://t.me/sultangaleevS" className="burger-menu__link">
                    <img src="./img/messenger-link.png" alt="messenger" className="burger-menu__link-ico"/>
                        Ссылка на мессенджер/telegram
                </a>
            </div>
        </div>
    </div>
  )
}
