const burgerMenu = () => {
    const burger = document.getElementById('burger') //бургер (открывает меню)
    const menu = document.getElementById('burger-menu') //меню
    const close = menu.querySelector('.burger-menu__close')//кнопка закрытия меню

    const handlerClose = () => {
        menu.classList.remove('burger-menu_active') //занкция закрытия меню
    }

    const handlerOpen = () => {
        menu.classList.add('burger-menu_active') //занкция открытия меню
    }

    burger.addEventListener('click', handlerOpen) //Открытию меню на клик
    close.addEventListener('click', handlerClose) //закрытие меню на клик
}

export default burgerMenu