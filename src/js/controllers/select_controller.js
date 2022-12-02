import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "option", "result" ]
  static classes = [ "activeSelect", "activeOption" ]
  static values = { state: Boolean }

  selectOption = (e) => {
    if(e.target.classList[0] === 'select__option') {
        this.optionTargets.forEach(option => {
            option.classList.remove(this.activeOptionClass)
        })
        e.target.classList.add(this.activeOptionClass)
        this.resultTarget.innerHTML = e.target.innerHTML
    } 
    this.element.classList.remove(this.activeSelectClass)
    document.removeEventListener('click', this.selectOption)
    this.stateValue= false
}
  
  toggle(e) {
    if (this.stateValue) {
      this.element.classList.remove(this.activeSelectClass)
      document.removeEventListener('click', this.selectOption)
      
    } else {
      e.stopPropagation()
      this.element.classList.add(this.activeSelectClass)
      document.addEventListener('click', this.selectOption)
    }
    this.stateValue= !this.stateValue
  }
}