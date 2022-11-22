const navigation = () => {
    const navInit = () => {
        const nav = document.querySelector('.nav') // блок навигации
        const links = nav.querySelectorAll('.nav__link') // все навигационные ссылки
        const sections = document.querySelectorAll('.section') // все секции
        sections.forEach(section => { // для каждой секции
          if (window.pageYOffset >= section.offsetTop) { // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
            links.forEach(link => { // для каждой ссылки
              link.classList.remove('nav__link_active') // удаляем активный класс
              if (link.dataset.section === section.id) { // проверяем, если data-атрибуты ссылки и секции совпадают
                link.classList.add('nav__link_active') // добавляем ссылке активный класс
              }
    
            })
          }
    
        })
      }
    navInit() // запуск при загрузке страницы
    window.addEventListener('scroll', () => {
    navInit() // запуск при скролле страницы
    })
    window.addEventListener('resize', () => {
    navInit() // запуск при ресайзе страницы
    })
}

export default navigation