import './ReviewDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown, faArrowUp, faArrowDown, faUpLong, faDownLong, faUpDown} from '@fortawesome/free-solid-svg-icons'

export default function ReviewDisplay () {
    const ratings = [{title: 'Easiness', value:4}, {title: 'Difficulty', value: 1}]
    const overall = () => {
        let sum = 0;
        ratings.forEach(rating => {
            sum += rating.value;
        })
        return sum/ratings.length;
    }
    ratings.push({title: 'Overall', value: overall()});
    let tags = ['liked', 'wouldTakeAgain'];
    return (
        <div className="ReviewDisplay">
            <div className="profileDisplay">
                <img src="https://static.wixstatic.com/media/a6f9ad_e3c88e2e841c485c81897314c83ff5f9~mv2.png/v1/fit/w_2500,h_1330,al_c/a6f9ad_e3c88e2e841c485c81897314c83ff5f9~mv2.png" alt="" />
            </div>       
            <div className="reviewContainer">

                <div className="container">
                    <div className="contentContainer">
                    
                        <div className="header">
                            <p className="name">Ammad Qureshi</p>
                            <p className="subTitle">Computer Science @ YU • 2 days ago</p>
                        </div>
                    
                        <div className="review">
                            <p>
                            The professors can vary but the course content is very interesting. Tests aren’t too hard
                                <span className='tags'>{' '+tags.map(tag => {return `#${tag}`}).join(' ')}</span>
                            </p>
                        </div>
                    
                    </div>
                    
                    <div className="ratingContainer">
                        {
                            ratings.map((rating, i) => {
                                return GenerateRating(rating.title, rating.value, i);
                            })
                        }
                    </div>
                </div>

                {/* <div className="reviewRatings">

                    <div className="ratingBtn">
                        <button><FontAwesomeIcon icon={faUpLong}/></button>
                        <p className="ratingNumberUp">{0}</p>
                    </div>

                    <div className="ratingBtn">
                        <button><FontAwesomeIcon icon={faDownLong}/></button>
                        <p className="ratingNumberDown">{0}</p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

const GenerateRating = (title, value, i) => {
    let _value = value;
    console.log(title,value);
    if (title === 'Difficulty')
        _value = 6-value;
    
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