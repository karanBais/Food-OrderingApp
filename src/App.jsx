import React from 'react'
import Header from './Components/Layout/Header'
import './App.css'
import Content from './Components/Layout/Content'
import Meals from './Components/Meals/Meals'
import {data} from './Components/Meals/Data'

const App = () => {
  return (
  <div className='app-background'>
  <Header />
  <Content />
  <Meals data={data} />
  </div>
  )
  
}

export default App