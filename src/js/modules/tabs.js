const tabs = () => {
    const tabs = document.getElementById('tabs')//Родительский элемент
    const btns = tabs.querySelectorAll('.tabs__btn')//Кнопки
    const contents = tabs.querySelectorAll('.tabs__content')//контент
    const marker = tabs.querySelector('.tabs__marker')//маркер активного таба

    const handler = (e) => {//функция на клик по кнопке
        btns.forEach(btn => {btn.classList.remove('tabs__btn_active')})//уберием у всех кнопок активное состояние
        e.target.classList.add('tabs__btn_active')//навешиваем активный класс на кнопку
        contents.forEach(content => {//итерация по контенту
            if (content.dataset.content === e.target.dataset.tabs) {//если дата атрибут такой же как у кнопки
                content.classList.add('tabs__content_active')//ставим активный класс
            } else {
                content.classList.remove('tabs__content_active')//если нет убираем
            }
        })
        marker.style.transform = `translateX(${e.target.offsetLeft}px)`//передвигаем маркер
    }

    btns.forEach(btn => {
        btn.addEventListener('click', handler)//обработчик на клик
    })
}

export default tabs