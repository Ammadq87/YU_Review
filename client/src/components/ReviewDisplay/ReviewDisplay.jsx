import './ReviewDisplay.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUp, faCircleDown, faArrowUp, faArrowDown, faUpLong, faDownLong, faUpDown} from '@fortawesome/free-solid-svg-icons'

export default function ReviewDisplay () {
    const ratings = [{title: 'Easiness', value:4}, {title: 'Difficulty', value: 1}]
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
    if (title === 'Difficulty')
        _value = 6-value;
    
    const colorMap = {
        1: '#E31837',
        2: '#FFA944',
        3: '#FFE144',
        4: '#91D772',
        5: '#1FAF47'
    };

    return (
        <div className="rating" key={i}>
            <div className="ratingBox" style={{backgroundColor: colorMap[_value]}}>
                <p>{value}</p>
            </div>
            <p className="ratingTitle"> {title}
            </p>
        </div>
    )

}