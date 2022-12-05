import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "menu" ]

    handlerClose = () => {
        this.menuTarget.classList.remove('burger-menu_active') //занкция закрытия меню
    }

    handlerOpen = () => {
        this.menuTarget.classList.add('burger-menu_active') //занкция открытия меню
    }
}