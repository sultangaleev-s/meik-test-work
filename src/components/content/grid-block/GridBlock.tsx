import React from 'react'

export const GridBlock = () => {
  return (
    <section id="grid" className="section grid">
        <h2 className="section-header">Сетка</h2>
        <p className="grid__text">Задание предполагает адаптивную вёрстку. Используется 3 состояния в зависимости от устройства. Сетка «резиновая» — переменной ширины.</p>
        <h3 className="grid__table-header">Десктоп (1200+)</h3>
        <div className="grid__table-info-head">
            <span className="grid__table-info">Контент</span>
            <span className="grid__table-info">Колонок</span>
            <span className="grid__table-info">Ширина колонки</span>
            <span className="grid__table-info">Межколонник</span>
        </div>
        <div className="grid__table-value-head">
            <span className="grid__table-value">1072-1312</span>
            <span className="grid__table-value">12</span>
            <span className="grid__table-value">60-80</span>
            <span className="grid__table-value">32</span>
        </div>
        <div className="grid__table">
            <img src="./img/note.png" alt="desktop" className="grid__img"/>
        </div>

        <h3 className="grid__table-header">Планшет (736+)</h3>
        <div className="grid__table-info-head">
            <span className="grid__table-info">Контент</span>
            <span className="grid__table-info">Колонок</span>
            <span className="grid__table-info">Ширина колонки</span>
            <span className="grid__table-info">Межколонник</span>
        </div>
        <div className="grid__table-value-head">
            <span className="grid__table-value">672-928</span>
            <span className="grid__table-value">8</span>
            <span className="grid__table-value">56-88</span>
            <span className="grid__table-value">32</span>
        </div>
        <div className="grid__table grid__table-tablet">
            <img src="./img/tablet.png" alt="tablet" className="grid__img"/>
        </div>

        <h3 className="grid__table-header">Телефон (320+)</h3>
        <div className="grid__table-info-head">
            <span className="grid__table-info">Контент</span>
            <span className="grid__table-info">Колонок</span>
            <span className="grid__table-info">Ширина колонки</span>
            <span className="grid__table-info">Межколонник</span>
        </div>
        <div className="grid__table-value-head">
            <span className="grid__table-value">296–424</span>
            <span className="grid__table-value">4</span>
            <span className="grid__table-value">56-88</span>
            <span className="grid__table-value">24</span>
        </div>
        <div className="grid__table grid__table-phone">
            <img src="./img/phone.png" alt="phone" className="grid__img-phone"/>
        </div>
    </section>
  )
}
