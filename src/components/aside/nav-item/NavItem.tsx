import React, {SyntheticEvent} from 'react'

interface INavItem {
    id: string,
    title: string,
    isActive: boolean,
}

export const NavItem = ({id, title, isActive}:INavItem) => {
    const scroll = (e:SyntheticEvent) => {
        e.preventDefault(); 
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

  return (
    <li className='nav__item'>
        <a 
        href={`#${id}`}
        className={isActive ? "nav__link nav__link--active" : "nav__link"}
        data-section={id}
        onClick={scroll}
        >
            {title}
        </a>
    </li>
  )
}
