import React, { ReactNode } from 'react'

interface ITab {
    title: string
    children: ReactNode
}

export const Tab = ({ children }:ITab) => {
  return (
    <div className="tabs__content">
        {children}
    </div>
  )
}
