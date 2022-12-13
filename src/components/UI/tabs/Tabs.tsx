import React, { ReactElement, useState } from 'react'
import { TabTitle } from './TabTitle'
import './tabs.scss'

interface ITabs {
  children: ReactElement[]
}

export const Tabs = ({children}:ITabs) => {

  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div className='tabs'>
      <div className='tabs__btns-block'>
        {
        children.map((item, index) => (
          <TabTitle 
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={index === selectedTab}
          />
          ))
        }
      </div>
        {children[selectedTab]}
  </div>
  )
}
