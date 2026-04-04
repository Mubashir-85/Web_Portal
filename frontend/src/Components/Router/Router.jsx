import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../Layout'
import Hero from '../Pages/Home/Hero';
import Course from '../Pages/Course/Course';
import Scholarship from '../Pages/Scholarship/Scholarship';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Exams from '../Pages/Exams/Exams';
import ContactUs from '../Pages/ContactUs/ContactUs';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import ProtectedRoute from '../ProtectedRoute';
import { isAuthenticated } from '../Services/auth';

function Router() {
  return (
 
    <Routes>
        {/* Redirect root to login if not authenticated */}
        <Route path='/' element={
          isAuthenticated() ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />
        } />
        
        {/* Public Auth routes without Layout */}
        <Route path='login' element={
          isAuthenticated() ? <Navigate to="/home" replace /> : <Login />
        } />
        <Route path='signup' element={
          isAuthenticated() ? <Navigate to="/home" replace /> : <SignUp />
        } />

        {/* Protected routes with Layout */}
        <Route path='/' element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }>
          <Route path='home' element={<Hero/>}/>
          <Route path='course' element={<Course/>}/>
          <Route path='scholarship' element={<Scholarship/>}/>
          <Route path='exams' element={<Exams/>}/>
          <Route path='aboutus' element={<AboutUs/>}/>
          <Route path='contactus' element={<ContactUs/>}/>
        </Route>

    </Routes>
  
  )
}

export default Router;