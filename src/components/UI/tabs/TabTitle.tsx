import React from 'react'

interface ITabTitle {
    title: string
    index: number
    setSelectedTab: (index: number) => void
    isActive: boolean
}

export const TabTitle = ({title, index, setSelectedTab, isActive}: ITabTitle) => {
  return (
    <button 
    className={isActive ? 'tabs__btn tabs__btn--active' : 'tabs__btn'}
    onClick={() => setSelectedTab(index)}
    >
        {title}
        {isActive && <span className="tabs__marker"></span>}
    </button>
  )
}
