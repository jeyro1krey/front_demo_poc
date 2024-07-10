import { useState } from 'react'
import GridLayout from "react-grid-layout";
import { Box } from '@mui/material'
import "./App.css"

import BotAppBar from './components/BotAppBar'
import BotPerso from './components/ChatBot'
import SelectDoc from './components/SelectDoc'



function App() {
  const [count, setCount] = useState(0)
  
  const layout = [
    { i: "a", x: 0, y: 0, w: 5, h: 8, static: true },
    { i: "b", x: 6, y: 0, w: 5, h: 8, static: true },

  ];


  return (
    <div className='root'>
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">
          <SelectDoc />
        </div>
        <div key="b">          
          <BotAppBar />
          <BotPerso />
        </div>
      </GridLayout>
    </div>
  )
}

export default App
