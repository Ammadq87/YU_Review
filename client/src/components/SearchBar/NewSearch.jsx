import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

//ToDo: Implement search review view
export default function NewSearch (props) { 
    
    const [results, setResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [displayResults, setDisplayResults] = useState(results.length === 0 ? false : true);

    //#region Database
    const database = axios.create({
        baseURL: 'http://localhost:3000/api'
    });
    //#endregion

    //#region Search Bar

    /**
     * Sanitizes and sets searchTerm variable
     * @param {Event} e 
     */
    const handleSearchTerm = (e) => {
        let term = e.target.value?.trim();
        setSearchTerm(term);
    }
    
    /**
     * Update search result options
     * @param {Array<object>} v 
     */
    const handleResults = (obj) => {
        if (!obj)
            return;
        
        const data = obj['data'];
        let _data = [];
        data?.forEach(d => {
            _data.push(d['ID']);
        });

        setResults([..._data]);

    }

    const searchDatabase = async () => {
        try {
            if (!searchTerm)
                return;
            const results = await database.get(`/york/getCourse/${searchTerm}`);
            handleResults(results)
        } catch (e) {
            console.log(e);
        }
    }

    /**
     * Search through database to find item that matches searchTerm
     */
    useEffect(() => {
        searchDatabase();
    }, [searchTerm]);


    /**
     * Clears out results and turns off result display 
     */
    const handleOnBlur = () => {
        setTimeout(() => {
            setResults([]);
            setDisplayResults(false)
        }, 250);
    }

    //#endregion

    //#region Link Redirect
    
    /**
     * 
     * @param {string} link 
     */
    const handleRedirect = async (link) => {
        let redirect = '';
        try {
            const regex = /\d/;
            if (regex.test(link)) {
                const code = link;
                link = link.substring(0, link.lastIndexOf('.')) + '-00';
                redirect += `course/${link}`;
                const x = await database.get(`/york/updateCourseRelevance/${code}`);
            } else {
                redirect += `professor/${link}`;                
            }
        } catch (e) {
            console.log(e);
        }
        return redirect;
    }
    //#endregion

    return (

        <div className='w-full block items-center relative mx-4'>

            <div className='flex items-center w-full mt-4'>
                <FontAwesomeIcon 
                    className='text-gray h-4 w-4 p-4 flex items-center bg-lightgray rounded-tl-md rounded-bl-md'
                    icon={faMagnifyingGlass}
                />
                <input
                    className='h-12 w-full p-2 bg-lightgray rounded-tr-md rounded-br-md outline-none font-semibold' 
                    type="text"
                    placeholder='Search courses and professors at YorkU'
                    onChange={(e) => handleSearchTerm(e)}
                    onFocus={() => {setDisplayResults(true)}}
                    onBlur={() => {handleOnBlur()}}
                />
            </div>

            <div 
                className='flex shadow-md rounded-md z-50 absolute bg-white w-full p-2 px-4'
                id='results' 
                style={{display: displayResults ? 'block' : 'none'}}
            >
                <ul>
                    <li key={0} className='font-bold'>Courses</li>
                    <hr />
                    {results?.map((result, i) => {
                        return (
                            <li>
                            <a
                              href={`/#`}
                              onClick={async (event) => {
                                event.preventDefault();
                                try {
                                  const redirect = await handleRedirect(result);
                                  window.location.href = `/${redirect}`;
                                } catch (e) {
                                  console.error(e);
                                }
                              }}
                              key={i + 1}
                              className='font-medium text-blue pt-1'
                            >
                              {result}
                            </a>
                          </li>
                        )
                    })}
                    <li><a href='/' className='font-medium text-blue italic pt-1'>Explore more here!</a></li>
                </ul>
            </div>

        </div>
    )
}