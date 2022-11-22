import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burgerMenu.js";
import castomSelect from "./modules/select.js"
import accardeonControl from './modules/accardeon.js'
import inputCheck from './modules/input.js'
import navigation from './modules/navigation.js'

flsFunctions.isWebp()

document.addEventListener('DOMContentLoaded', () => {
    burgerMenu()
    inputCheck()
    castomSelect()
    accardeonControl()
    navigation()
})