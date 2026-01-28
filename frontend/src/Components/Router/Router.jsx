import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Hero from '../Pages/Home/Hero';
import Course from '../Pages/Course/Course';

function Router() {
  return (
 
    <Routes>
        <Route path='/' element={<Layout/>} >
         <Route path='/' element={<Hero/>}/>
         <Route path='course' element={<Course/>}/>

         
        </Route>

    </Routes>
  
  )
}

export default Router;