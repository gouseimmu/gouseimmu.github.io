import React from 'react'
import { Routes, Route} from "react-router-dom"
import Home from '../Components/Home'
import {Projects} from '../Components/Projects'
import {Skills} from '../Components/Skills'
import {Contacts} from '../Components/Contacts'
 import About from  "../Components/About"

const AllRoutes = () => {
  return (
    <div>
      
        <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route path={'/about'} element={<About/>}></Route>
            <Route path={'/skills'} element={<Skills/>}></Route>
            <Route path={'/projects'} element={<Projects/>}></Route>
            <Route path={'/contacts'} element={<Contacts/>}></Route>
        </Routes>
         
    </div>
  )
}

export default AllRoutes