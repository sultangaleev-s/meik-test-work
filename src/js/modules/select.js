const castomSelect = () => {
    const select = document.getElementById('select'); //родительский элемент
    const selectHeader = select.querySelector('.select__header'); //кнопка развернуть/свернуть варианты выбора
    const selectBody = select.querySelector('.select__body');//элемент с вариантами выбора
    const selectIcon = select.querySelector('.select__icon');//иконка
    const selectResult = select.querySelector('.select__result');//поле с результатом выбора
    const selectOptions = select.querySelectorAll('.select__option')//все варианты выбора
    let result = '';//поле с результатом для дальнейшей работы в js
    let isOpen = false;//состояние открыт или закрыт
    
    
    const selectOption = (e) => {//функция выбора
        if(e.target.classList[0] === 'select__option') {//если класс кликнутого поля совпадает
            selectOptions.forEach(option => {//проход по всем вариантам выбора
                option.classList.remove('select__option_active')//убираем класс активного состояния
            })
            e.target.classList.add('select__option_active')//добавляем активный класс на выбранный элемент
            result = e.target.innerHTML//перезаписываем результат
            selectResult.innerHTML = result//записываем в Html элемент
        }
    }

    const openSelect = () => {//функция открытия селекта
        if (!isOpen) {//если закрыт
            selectBody.style.display = 'block'//установка дисплей блок 
            selectIcon.style.transform = 'rotate(180deg)'//разворот иконки
            selectHeader.classList.add('select__header_active')//активный класс на шапку селекта
            selectBody.addEventListener('click', selectOption)//подключение обработчика на выбор
        } else {
            selectBody.style.display = 'none'//установка дисплей none 
            selectIcon.style.transform = 'rotate(0)'////разворот иконки
            selectHeader.classList.remove('select__header_active')//убраем активный класс с шапки селекта
            selectBody.removeEventListener('click', selectOption)//убираем обработчик
        }
        isOpen = !isOpen//изменени состояния на противоположное
    }

    selectHeader.addEventListener('click', openSelect)//запуск
}

export default castomSelect