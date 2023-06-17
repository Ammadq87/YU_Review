import './App.css'
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Notification from './components/Notification/Notification';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar/Navbar';
import ReviewDisplay from './components/ReviewDisplay/ReviewDisplay';
import Course from './routes/Course/Course';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';

function App() {
  const notificationConfig = {
    type: 'warning',
    text: 'Must Log In to Leave a Review'
  };
  return (
    <div className="root">
      {/* <Notification data={notificationConfig}/> */}
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile'/>
          <Route path='/course/:courseCode' element={<Course />}/>
          <Route path='/professor'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
