import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "link" ]

    connect() {
        const sections = document.querySelectorAll('.section')
        window.addEventListener('scroll', () => this.action(sections))
        window.addEventListener('resize', () => this.action(sections))
    }

    scroll(e) {
        e.preventDefault(); 
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    action(sections) {
        sections.forEach(section => {
          if (window.pageYOffset >= section.offsetTop) { 
            this.linkTargets.forEach(link => { 
              link.classList.remove('nav__link_active') 
              if (link.dataset.section === section.id) { 
                link.classList.add('nav__link_active') 
              }
            })
          }
        })
    }
}