import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../Layout'
import Hero from '../Pages/Home/Hero';
import Course from '../Pages/Course/Course';
import Scholarship from '../Pages/Scholarship/Scholarship';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Exams from '../Pages/Exams/Exams';

function Router() {
  return (
 
    <Routes>
        <Route path='/' element={<Layout/>} >
         <Route path='/' element={<Hero/>}/>
         <Route path='course' element={<Course/>}/>
         <Route path='scholarship' element={<Scholarship/>}/>
         <Route path='exams' element={<Exams/>}/>
         <Route path='aboutus' element={<AboutUs/>}/>

         
        </Route>

    </Routes>
  
  )
}

export default Router;