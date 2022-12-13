import React, { useEffect, useState } from 'react'
import { NavItem } from './nav-item/NavItem'
import './aside.scss'

export const Aside = () => {

    const navigationList = [
        {id:'parting_word', title: 'Напутственное слово', position: 0},
        {id:'grid', title: 'Сетка', position: 0},
        {id:'text-types', title: 'Типографика', position: 0},
        {id:'ui', title: 'UI', position: 0},
    ]
    const [activeIndex, setActiveIndex] = useState(0);

    const init = () => {
        navigationList.forEach((section) => {
            const position = document.getElementById(section.id)?.offsetTop
            if (position) {
                section.position = position
            }
        })
        action()
    }

    const action = () => {
        let index = 0;
        navigationList.forEach((section, i) => {
            if (window.scrollY >= section.position) { 
                index = i
            }
        })
        if (index !== activeIndex) {
            setActiveIndex(index)
        }
    }

    useEffect(() => {
        init()
        window.addEventListener('scroll', action)
        window.addEventListener('resize', action)

        return () => {
            window.removeEventListener('scroll', action)
            window.removeEventListener('resize', action)
        }
    }, [navigationList])


  return (
    <aside className="aside">
        <nav className="nav aside__nav">
            <ul className="nav__list">
                {
                    navigationList.map((item, index) => (
                        <NavItem {...item} key={item.id} isActive={index === activeIndex}/>
                    ))
                }
            </ul>
        </nav>
    </aside>
  )
}
