const inputCheck = () => {
    const input = document.getElementById('input') //поле инпут
    const inputBox = document.getElementById('input-box') //родительский блок
 
    const handler = (e) => {
        const value = e.target.value //текущее значение в инпуте
        const dotPos = value.indexOf('.') //позиция точки в инпуте

        if ((value.includes('@') && value.includes('.') && dotPos < value.length - 2) || value.length === 0) { //если есть @ и . а также после точки есть еще символы или поле пустое
            inputBox.classList.remove('input-box_invalid')//убирается класс не валидной записи
            return //выход из функции
        } 

        inputBox.classList.add('input-box_invalid') //добавляется класс не валидной записи
    }

    input.addEventListener('change', handler) //запуск при вводе в инпут
}

export default inputCheck