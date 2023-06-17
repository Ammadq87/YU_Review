import './Home.css'
import Navbar from "../../components/Navbar/Navbar"
import DisplayTableAll from '../../components/DisplayTable/DisplayTableAll'

export default function Home () {
    
    const displayTableConfig = {
        tabs: ['Courses', 'Professors']
    }

    return (
        <div className="Home">
            <h1 className='font-bold text-3xl'>Welcome 👋</h1>
            <div className="intro">
                <p>Hi there fellow/incoming Lion! Explore course and professor 
                reviews from YorkU students. You can also plan out your next 
                semesters or share you calendars with your fellow Lions. Feel free to check out other <a href='*'>YorkU projects</a></p>
            </div>
            <DisplayTableAll data={displayTableConfig}/>
        </div>
    )
}