import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Banner from "../../components/Banner/Banner";
import Rating from "../../components/Rating/Rating";
import CourseReviewModel from "../../models/CourseReviewModel";
import { useState } from "react";
import Notification from "../../components/Notification/Notification";

const bannerConfig = {
    title:  `Reviewing: ${location?.href?.split('/')[5]?.split('-').splice(1,2).join('-')}`,
    subTitle: generateBannerSubtitle()
}

export default function CourseReview() {
    const [liked, setLiked] = useState(false);
    const [retake, setRetake] = useState(false);
    const [recommend, setRecommend] = useState(false);
    const [content, setContent] = useState('');
    const [prof, setProf] = useState('');
    const [difficult, setDifficulty] = useState(-1);
    const [useful, setUsefulness] = useState(-1);
    const [submitted, setSubmitted] = useState(null);
    const [invalidForm, setInvalidForm] = useState(null);
    const review = new CourseReviewModel();

    const handleSetUseful = (i) => {
        setUsefulness(i);
      };
    
    const handleSetDifficulty = (i) => {
        setDifficulty(i);
    };

    return (
        <div>
            <Banner data={bannerConfig}/>
            <form action=""
                className="bg-white m-auto mt-8 w-3/5 p-4"
            >
                <h1 className='ml-4 font-bold text-3xl'>Your Review</h1>
                
                {/* //ToDo: Search input has to be updated so that it can provides a list of professors to choose from */}
                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">Professor:</p>
                    <input onChange={(e) => setProf(e.target.value)} type="text" placeholder="Professor Name" className="my-2 w-4/5 border border-lightgray p-2 rounded-sm block"/>
                    {prof && 
                    <p className="text-sm">Want to rate
                        <a className="text-blue font-bold"
                        href="/"> {prof}</a>?
                    </p>
                    }
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">How Difficult was {bannerConfig?.title.split(' ')[1]}? <span className="text-red">*</span></p>
                    <Rating type={'Difficulty'} setValue={handleSetDifficulty} />
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">How useful was {bannerConfig?.title.split(' ')[1]}? <span className="text-red">*</span></p>
                    <Rating type={'Useful'} setValue={handleSetUseful} />
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex items-center justify-between">
                    <p className="w-fit text-black font-semibold">Liked {bannerConfig?.title.split(' ')[1]}?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110 hover:text-green-500" 
                        type="button"><FontAwesomeIcon icon={faThumbsUp} onClick={() => {setLiked(!liked)}} style={{color: liked ? '#1FAF47' : '#747474'}}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110 hover:text-red" 
                        type="button"><FontAwesomeIcon icon={faThumbsDown} onClick={() => {setLiked(!liked)}} style={{color: !liked ? '#E31837' : '#747474'}}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex items-center justify-between">
                    <p className="w-fit text-black font-semibold">Did you retake?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110 hover:text-green-500" 
                        type="button"><FontAwesomeIcon icon={faCircleCheck} className="bg-white rounded-full" onClick={() => {setRetake(!retake)}} style={{color: retake ? '#1FAF47' : '#747474'}}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110 hover:text-red" 
                        type="button"><FontAwesomeIcon icon={faCircleXmark} className="bg-white rounded-full" onClick={() => {setRetake(!retake)}} style={{color: !retake ? '#E31837' : '#747474'}}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex items-center justify-between">
                    <p className="text-black font-semibold">Would you recommend {bannerConfig?.title.split(' ')[1]}?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110 hover:text-green-500" 
                        type="button"><FontAwesomeIcon icon={faCircleCheck} className="bg-white rounded-full" onClick={() => {setRecommend(!recommend)}} style={{color: recommend ? '#1FAF47' : '#747474'}}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110 hover:text-red" 
                        type="button"><FontAwesomeIcon icon={faCircleXmark} className="bg-white rounded-full" onClick={() => {setRecommend(!recommend)}} style={{color: !recommend ? '#E31837' : '#747474'}}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">Your Comments: <span className="text-red">*</span></p>
                    <div className="mt-2 h-48 border border-lightgray rounded-sm">
                        <textarea className="w-full h-full p-2" placeholder={`My experience with ${bannerConfig?.title.split(' ')[1]} is...`}
                        onChange={(e) => {setContent(e.target.value)}}
                        ></textarea>
                    </div>
                </div>

                <button 
                    type="button"
                    className="ml-4 p-4 font-bold text-lg px-8 py-2 bg-blue text-white m-4"
                    onClick={() => {
                        review.setProfessor(prof);
                        review.setLiked(liked);
                        review.setReview(content);
                        review.setRetake(retake);
                        review.setRecommended(recommend);
                        review.setDifficulty(difficult);
                        review.setUseful(useful);

                        if (review.validInformation()) {
                            setSubmitted(review.submitCourseReview());
                            setTimeout(() => {setSubmitted(null)}, 5000);
                        } else {
                            setInvalidForm(true);
                            setTimeout(() => {setInvalidForm(null)}, 5000);
                        }
                    }}
                >Add Review</button>

                {submitted &&
                <Notification data={{type: 'success', text:'Review Submitted!'}}/>
                }

                {submitted === false &&
                <Notification data={{type: 'error', text:'Something went wrong!'}}/>
                }

                {invalidForm &&
                <Notification data={{type: 'error', text:'Please fill out the required fields'}}/>
                }
            </form>
        </div>
    )
}

// ToDo: Fill out map with other values
function generateBannerSubtitle() {
    const dept = location?.href?.split('/')[5]?.substring(0, 2);
    const map = {
        'LE': 'Electrical Engineering & Computer Science - LE',
        "AP": "Faculty of Liberal Arts & Professional Studies - AP",
        "HH": "Faculty of Health - HH",
        "FA": "School of the Arts, Media, Performance & Design - FA",
        "GL": "College universitaire Glendon - GL",
        "ED": "Faculty of Education - ED",
        "SB": "Schulich School of Business - SB",
        "SC": "Faculty of Science - SC",
        "EU": "Faculty of Environmental & Urban Change - EU",
        "LW": "Osgoode Hall Law School - LW",
        "GS:": "Faculty of Graduate Studies - GS"
    };
    return map[dept];
}