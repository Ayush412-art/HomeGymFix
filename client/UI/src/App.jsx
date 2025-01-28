import React  from 'react'

import './App.css'
import {HashRouter ,  Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Excercises from './pages/Excercises'
import {Navbar}  from './components/Navbar';
// import About from './pages/About'
import About from './pages/About'
import ExcerciseDescription from './pages/ExcerciseDescription'
function App() {
 

  return (
    <>
   
   <HashRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element = {<Home />} > </Route>
        <Route path="/excercises" element={<Excercises />} />
        <Route path="/excercise/:id" element={<ExcerciseDescription />} />
        <Route path='/About' element = {<About/>}></Route>
      </Routes>
    </HashRouter>
      
    </>
  )
}

export default App
