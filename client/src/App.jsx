import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="root">
      <button className='selectedBtn'>Click Me!</button>
      <button className='unselectedBtn'>Click Me Now!</button>
      <button className='saveBtn'>Save</button>
      <a href="/" className='link'>Link</a>
      <input type="text" className="textInput" />

      <Router>
        <Routes>
          <Route path='/'/>
          <Route path='/register'/>
          <Route path='/login'/>
          <Route path='/profile'/>
          <Route path='/course'/>
          <Route path='/professor'/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
