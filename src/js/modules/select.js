const castomSelect = () => {
    const select = document.getElementById('select'); //родительский элемент
    const selectHeader = select.querySelector('.select__header'); //кнопка развернуть/свернуть варианты выбора
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
        //закрытие селекта
        select.classList.remove('select_active')//убираем активный класс на селекте
        document.removeEventListener('click', selectOption)//убираем обработчик
        isOpen = false
    }

    const openSelect = (e) => {//функция открытия селекта
        if (isOpen) {
            select.classList.remove('select_active')//убираем активный класс на селекте
            document.removeEventListener('click', selectOption)//убираем обработчик
        } else {
            e.stopPropagation()//остановить погружение и всплытие
            select.classList.add('select_active')//активный класс на селект
            document.addEventListener('click', selectOption)//подключение обработчика на выбор
        }
        isOpen = !isOpen
    }

    selectHeader.addEventListener('click', openSelect)//запуск
}

export default castomSelect