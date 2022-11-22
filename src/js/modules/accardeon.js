const accardeonControl = () => {
    const accardeon = document.getElementById('accardeon'); //Аккардеон
    const toggle = accardeon.querySelector('.accardeon__info') //Переключатель
    const text = accardeon.querySelector('.accardeon__text') //скрытый текст
    const icon = accardeon.querySelector('.accardeon__icon') //иконка


    const toggleHandler = () => {
        toggle.classList.toggle('accardeon__info_active')
        text.classList.toggle('accardeon__text_active') //разворот текста
        icon.classList.toggle('accardeon__icon_active') //разворот иконки
    }

    toggle.addEventListener('click', toggleHandler) //прослушиватель на клик по переключателю
}

export default accardeonControl