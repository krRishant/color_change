import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Pallet from './components/Pallet'
import Circle from './components/Circle'
const App = () => {
  return (
    
      <Routes>
        <Route exact path='/' element={<Pallet/>} />
        <Route path='/circle' element={<Circle />} />
      </Routes>
    
    // <div>App</div>
  )
}

export default App