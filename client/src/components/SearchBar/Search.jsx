import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search (props) { 
    const {searchList, defaultSearchResult} = props?.data;
    const _defaultSearchResult = defaultSearchResult || "Explore more here!"
    const [results, setResults] = useState([]);
    const [searchData, setSearchData] = useState({});
    const [searchField, setSearchField] = useState('');
    const [displayResults, setDisplayResults] = useState(false);

    // useEffect(() => {
        // getYorkData();
    // }, [])

    const databaseAPI = axios.create({
        baseURL: 'http://localhost:3000/api/york'
    })

    const getYorkData = async () => {
        try {
            const apiBody = {
                coursePeriod: "FW_2022",
                professorPeriod: "FALL_WINTER_2022_2023"
            };

            const data = await databaseAPI.get('/getAll', {
                params: apiBody
            });
            
            setSearchData(data['data']);
            console.log(data['data']);

        } catch (err) {
            console.log(err);
        }
    }

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            const _searchField = searchField;
            let code = [];
            let dept = [];
            for (let i=0; i<_searchField.length; i++) {
                if (/\d/.test(_searchField[i]))
                    code.push(_searchField[i])
                else
                    dept.push(_searchField[i])
            }
            dept = dept.join('');
            code = code.join('');
            console.log(dept + " | " +code)
        }
    }

    const handleOnBlur = () => {
        setTimeout(() => {
            setDisplayResults(e => false);
            setResults([]);
        }, 1000);
    }

    return (
        <div className="Search">

            <div className="SearchContainer">

            <div className="searchIcon">
                <FontAwesomeIcon style={{fontSize: '16px'}} icon={faMagnifyingGlass}/>
            </div>
            <input 
                onChange={(e) => setSearchField(e.target.value)}
                onKeyDown={(e) => handleSearch(e)}
                onFocus={() => setDisplayResults(true)}
                onBlur={() => handleOnBlur()}
                type="search" 
                className="textInput" 
                placeholder="Explore courses and professors at York!"/>
            </div>
            
            <div className="results">
                <div 
                className="link" 
                style={{display: displayResults ? 'block' : 'none'}}>
                    <ul>
                        <li>Results: ({results.length})</li>
                        {
                            results?.map((result, i) => {
                                return (
                                    <li><a href={`/${result}`} className="link" key={i}>{result}</a></li>
                                )
                            })
                        }
                        <li href="/"><a href="" className="link" style={{color: '#3876F9'}}>{_defaultSearchResult}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}