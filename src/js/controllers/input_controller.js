import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "input" ]
    static classes = [ "active" ]

    handler = (e) => {
        const value = e.target.value
        const dotPos = value.indexOf('.') 

        if ((value.includes('@') && value.includes('.') && dotPos < value.length - 2) || value.length === 0) { 
            this.element.classList.remove(this.activeClass)
            return 
        } 

        this.element.classList.add(this.activeClass)
    }
}
