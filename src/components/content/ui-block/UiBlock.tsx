import React from 'react'
import { Accardeon } from '../../UI/accardeon/Accardeon'
import { Button } from '../../UI/btn/Button'
import { Checkbox } from '../../UI/checkbox/Checkbox'
import { Input } from '../../UI/input/Input'
import { Radio } from '../../UI/radio/Radio'
import { Select } from '../../UI/select/Select'

export const UiBlock = () => {
  return (
    <section id="ui" className="section">
        <h2 className="section-header">UI</h2>
        
        <div className="ui__item">
            <h3 className="section-subheader">Текстовое поле</h3>
            <div className="ui__input-group">
                <Input
                placeholder='E-mail'
                errorMessage='Error: E-mail is not valid!'
                required
                />

                <Input
                placeholder='E-mail'
                errorMessage='Error: E-mail is not valid!'
                state='hover'
                required
                />

                <Input
                placeholder='E-mail'
                errorMessage='Error: E-mail is not valid!'
                value="office@make.st"
                state='active'
                required
                />

                <Input
                placeholder='E-mail'
                errorMessage='Error: E-mail is not valid!'
                state='invalid'
                required
                />
            </div>
        </div>

        <div className="ui__item">
            <h3 className="section-subheader">Выпадающий список</h3>
            <p className="ui__text">Компонент состоит из текстового поля и выпадающей подсказки</p>
            <div className="ui__select-group">

                <Select
                title='Выбeрите что-нибудь'
                options={['Пункт первый','Пункт второй','Пункт третий','Пункт четвертый']}
                />

                <Select
                title='Выбeрите что-нибудь'
                options={[]}
                state='active'
                />

                <Select
                title='Выбeрите что-нибудь'
                options={['Пункт первый','Пункт второй','Пункт третий','Пункт четвертый']}
                state='active'
                />
            </div>
        </div>

        <div className="ui__item">
            <h3 className="section-subheader">Кнопка</h3>
            <div className="ui__button-group">
                <Button text='Отправить'/>
                <Button text='Отправить' state='hover'/>
                <Button text='Отправить' state='active'/>
                <Button text='Отправить' disabled/>
            </div>
        </div>

        <div className="ui__item">
            <h3 className="section-subheader">Чекбокс, радиобаттон</h3>
            <div className="ui__check-block">
                <form className="ui__check-group">
                    <Checkbox
                    id='checkbox1'
                    label='Выбери меня'
                    disabled
                    readOnly
                    />
                    <Checkbox
                    id='checkbox2'
                    label='Выбери меня'
                    readOnly
                    />
                    <Checkbox
                    id='checkbox3'
                    label='Птица счастья завтрашнего дня'
                    checked
                    readOnly
                    />
                </form>
                <form className="ui__check-group">
                    <Radio
                    label='Пластмассовый мир победил'
                    id='radio1'
                    disabled
                    readOnly
                    />
                    <Radio
                    label='Макет оказался сильней'
                    id='radio2'
                    name="radio"
                    readOnly
                    />
                    <Radio
                    label='Последний кораблик остыл'
                    id='radio3'
                    name="radio"
                    checked
                    readOnly
                    />
                </form>
            </div>
        </div>

        <div className="ui__item">
            <h3 className="section-subheader">Аккордеон</h3>
            <Accardeon
            title='Аккордеон'
            text='Гоpдость полными вагонами золотыми погонами С юга дyют молодые вет… Pазpывая в клочья облака не забыли шлют из далека С дома мама И не последняя любовь А по небy бегyт видишь чьи-то следы Это может быть ты это может быть я Это может наш дрyг Это может нам поют свои'
            />
        </div>
    </section>
  )
}
