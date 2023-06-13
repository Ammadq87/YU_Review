import './DisplayTableAll.css'
import { useState } from 'react'
import Filter from '../Filter/Filter';
/**
 * 
 * @param {string[]} props_data_tabs array tab names 
 * @returns 
 */
export default function DisplayTableAll (props) {
    const [currentTab, setCurrentTab] = useState('Courses');
    const [filter, setFilters] = useState({});

    const handleFilters = (_filter) => {
        setFilters(_filter);
    }


    const filterConfig = {
        'filters': [
            {
                filterName: 'Course Code',
                filterType: 'button',
                filterValues: ['1XXX', '2XXX', '3XXX', '4XXX']
            },
            {
                filterName: 'Min # of Ratings',
                filterType: 'range',
                filterValues: [100]//[courseList ? courseList.length : 0]
            }
        ]
    }

    return (
        <div className="DisplayTableAll">
            <div className="tabs">
                <button 
                className={currentTab === 'Courses' ? 'selectedBtn' : 'unselectedBtn'} 
                onClick={() => setCurrentTab('Courses')}>Courses</button>
                <button 
                className={currentTab !== 'Courses' ? 'selectedBtn' : 'unselectedBtn'} 
                onClick={() => setCurrentTab('Professors')}>Professors</button>
            </div>
            <Filter data={filterConfig} setFilters={handleFilters}/>
        </div>
    )
}