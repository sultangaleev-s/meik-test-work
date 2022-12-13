import React from 'react'
import { GridBlock } from './grid-block/GridBlock'
import { PartingWordBlock } from './parting-word-block/PartingWordBlock'
import { TextTypesBlock } from './text-types-block/TextTypesBlock'
import { UiBlock } from './ui-block/UiBlock'

import './content.scss'

export const Content = () => {
  return (
    <main className="content">
      <PartingWordBlock/>
      <GridBlock/>
      <TextTypesBlock/>
      <UiBlock/>
    </main>
  )
}
