import './ReviewDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

//ToDo: add 'Recommended tag' - will have to add to database too
//ToDo: Fix 'overall' square color
//ToDo: Have to abstract the component to make it re-usable for ProfessorReview 
export default function ReviewDisplay (props) {
    const {type, data} = props;
    const ratings = generateRatings(type, data);
    const overall = calculateOverall(ratings);
    const [userReview, setUserReview] = useState(false);

    ratings.push({title: 'Overall', value: overall});

    const tags = generateTags(data);
    
    useEffect(() => {
        handleSetUserReview();
    });

    const handleSetUserReview = () => {
        const User = JSON.parse(sessionStorage.getItem('User'));
        if (!User)
            setUserReview(false);
        else {
            const id = User?.User?.ID;
            if (data['UserID'] === id)
                setUserReview(true);
        }
    }

    return (
        <div className="ReviewDisplay">
            <div className="profileDisplay">
                <img src="https://static.wixstatic.com/media/a6f9ad_e3c88e2e841c485c81897314c83ff5f9~mv2.png/v1/fit/w_2500,h_1330,al_c/a6f9ad_e3c88e2e841c485c81897314c83ff5f9~mv2.png" alt="" />
            </div>       
            <div className="reviewContainer">
                <div className="container">
                    <div className="contentContainer">
                        <div className="header">
                            <p className="name">{data['Author']}</p>
                            <p className="subTitle">{data['Major']} @ YU • {formatDate(data['DaysSincePost'])}</p>
                        </div>
                        <div className="review">
                            <p>
                                {data['Review']}
                                <span className='tags'>{tags}</span>
                            </p>

                            {
                                data['ProfessorName']
                                &&
                                <p className='text-sm text-gray font-medium'>
                                    — taught by <a className='text-[#F7DB89] italic mt-1 font-semibold' href={`/professor/${formatProfLink(data['ProfessorName'])}`}>{data['ProfessorName']}</a>
                                </p>
                            }

                        </div>
                    </div>
                </div>
                <div className="ratingContainer">

                    {
                        ratings.map((rating, i) => {
                            return GenerateRating(rating.title, rating.value, i);
                        })
                    }

                    {
                        userReview &&
                        <button
                        onClick={() => {deleteReview(data)}}
                        className='text-md font-medium text-red float-right transition-transform transform hover:scale-110'>
                            <FontAwesomeIcon icon={faTrashCan}/>
                        </button>
                    }
                </div>
            </div>
        </div>
    )
}

const deleteReview = async (data) => {
    const id = data?.ReviewID;
    console.log(id);
    if (!id)
        return;

    const db = axios.create({
        baseURL: 'http://localhost:3000/api/course/review'
    });

    try {
        const result = await db.delete(`/deleteReview/${id}`);
        console.log(result);
        location.reload();
    } catch (err) {
        console.log(err);
    }
}

const calculateOverall = (ratings) => {
    let sum = 0;
    ratings.forEach(rating => {
        if (rating.title === 'Difficulty')
            sum += 6-(rating.value)
        else
            sum += rating.value;
    })
    return sum/ratings.length;
}

const generateRatings = (type, data) => {
    if (type === 'course') {
        return [{title: 'Usefulness', value: data['Useful']}, {title: 'Difficulty', value: data['Difficulty']}]
    } else {
        return [{title: 'Clarity', value: data['Clarity']}, {title: 'Difficulty', value: data['Difficulty']}, {title: 'Engaging', value: data['Engaging']}]
    }
}


const formatProfLink = (prof) => {
    prof = prof?.replace('.', '');
    return prof?.split(' ')?.join('_');
}

const formatDate = (days) => {
    if (days >= 3650) {
        return '10+ years ago';
    } else if (days >= 365) {
        if (days % 365 === 1)
            return '1 year ago';
        return Math.ceil(days / 365) + ' years ago';
    } else if (days >= 30) {
        if (days % 30 === 1)
            return '1 month ago';
        return Math.ceil(days / 30) + ' months ago';
    } else if (days >= 7) {
        if (days % 7 === 1)
            return '1 week ago';
        return Math.ceil(days % 7) + ' weeks ago';
    } else 
        return days + ' days ago';
}

const generateTags = (data) => {
    let tags = '';
    if (data['Retake'] !== 0)
        tags += '#retake ';
    if (data['LikedCourse'] !== 0)
        tags += '#likedCourse ';
    return tags;    
}

const GenerateRating = (title, value, i) => {
    if (title === 'Difficulty')
        value = 6-value;
    
    let color = '';
    if (value <= 1)
        color = '#E31837';
    else if (value <= 2)
        color = '#FFA944';
    else if (value <= 3)
        color = '#FFE144';
    else if (value <= 4)
        color = '#91D772';
    else if (value <= 5)
        color = '#1FAF47';

    if (title === 'Difficulty')
        value = 6 - value;

    return (
        <div className="rating" key={i}>
            <div className="ratingBox" style={{backgroundColor: color}}>
                <p>{value}</p>
            </div>
            <p className="ratingTitle"> {title}
            </p>
        </div>
    )
}