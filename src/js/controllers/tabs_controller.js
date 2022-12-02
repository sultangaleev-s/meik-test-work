import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ 'btn', 'content', 'marker' ]
    static classes = [ "activeBtn", "activeContent" ]

    handler = (e) => {
        this.btnTargets.forEach(btn => {btn.classList.remove(this.activeBtnClass)})
        e.target.classList.add(this.activeBtnClass)
        this.contentTargets.forEach(content => {
            if (content.dataset.content === e.target.dataset.tabs) {
                content.classList.add(this.activeContentClass)
            } else {
                content.classList.remove(this.activeContentClass)
            }
            this.markerTarget.style.transform = `translateX(${e.target.offsetLeft}px)`
        })
    }   
}