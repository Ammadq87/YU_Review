import './App.css'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Course from './routes/Course/Course';
import Login from './routes/Login/Login';
import Register from './routes/Register/Register';
import Profile from './routes/Profile/Profile';
import CourseReview from './routes/Reviews/CourseReview';

function App() {
  return (
    <div className="root">
      <Navbar/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/course/:courseCode' element={<Course />}/>
          <Route path='/professor'/>
          <Route path='/course/review/:courseCode' element={<CourseReview/>}></Route>
          <Route path='/*'></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
