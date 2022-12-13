import React from 'react'
import { Tab } from '../../UI/tabs/Tab'
import { Tabs } from '../../UI/tabs/Tabs'

export const TextTypesBlock = () => {
  return (
    <section id="text-types" className="section text-types">
        <h2 className="section-header">Типографика</h2>
        <p className="text-types__text">Используется шрифт Graphik. На телефонах стили типографики переопределяются</p>
        <Tabs>
            <Tab title="Десктоп">
                <h1 className="text-types__header-extra-lg text-types__text-item">Текст заголовка</h1>
                <h2 className="text-types__header-lg text-types__text-item">Текст заголовка</h2>
                <h3 className="text-types__header-md text-types__text-item">Текст заголовка</h3>
                <h4 className="text-types__header-sm text-types__text-item">Текст заголовка</h4>
                <p className="text-types__text-lead text-types__text-item">Текст лида</p>
                <p className="text-types__text-bold text-types__text-item">Крупный текст</p>
                <p className="text-types__text-md text-types__text-item">Основной текст</p>
                <p className="text-types__text-sm text-types__text-item">Вспомогательный текст</p>
            </Tab>
            <Tab title="Телефон">
                <h1 className="text-types__header-extra-lg-m text-types__text-item">Текст заголовка</h1>
                <h2 className="text-types__header-lg-m text-types__text-item">Текст заголовка</h2>
                <h3 className="text-types__header-md-m text-types__text-item">Текст заголовка</h3>
                <h4 className="text-types__header-sm text-types__text-item">Текст заголовка</h4>
                <p className="text-types__text-lead text-types__text-item">Текст лида</p>
                <p className="text-types__text-bold text-types__text-item">Крупный текст</p>
                <p className="text-types__text-md text-types__text-item">Основной текст</p>
                <p className="text-types__text-sm text-types__text-item">Вспомогательный текст</p>
            </Tab>
        </Tabs>
    </section>

  )
}
