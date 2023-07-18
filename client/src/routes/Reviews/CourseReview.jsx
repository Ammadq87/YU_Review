import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import Banner from "../../components/Banner/Banner";
import Rating from "../../components/Rating/Rating";

const bannerConfig = {
    title:  `Reviewing: ${location?.href?.split('/')[5]?.split('-').splice(1,2).join('-')}`,
    subTitle: generateBannerSubtitle()
}

export default function CourseReview() {
    return (
        <div>
            <Banner data={bannerConfig}/>
            <form action=""
                className="bg-white m-auto mt-8 w-3/5 p-4"
            >
                <h1 className='ml-4 font-bold text-3xl'>Your Review</h1>
                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">Professor:</p>
                    <input type="text" placeholder="Professor Name" className="my-2 w-4/5 border border-lightgray p-2 rounded-sm"/>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">How Difficult was {bannerConfig?.title.split(' ')[1]}</p>
                    <Rating type={'Difficulty'}/>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">How useful was {bannerConfig?.title.split(' ')[1]}</p>
                    <Rating type={'Useful'}/>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex">
                    <p className="text-black font-semibold">Liked {bannerConfig?.title.split(' ')[1]}?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110" 
                        type="button"><FontAwesomeIcon icon={faThumbsUp}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110   " 
                        type="button"><FontAwesomeIcon icon={faThumbsDown}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex">
                    <p className="text-black font-semibold">Did you/have-to retake?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110" 
                        type="button"><FontAwesomeIcon icon={faCircleCheck}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110   " 
                        type="button"><FontAwesomeIcon icon={faCircleXmark}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray flex">
                    <p className="text-black font-semibold">Would you recommend {bannerConfig?.title.split(' ')[1]}?</p>
                    <div className="ml-8">
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray mr-1 transition-transform transform hover:scale-110" 
                        type="button"><FontAwesomeIcon icon={faCircleCheck}/></button>
                        <button className="w-12 h-12 text-3xl bg-lightgray text-gray ml-1 transition-transform transform hover:scale-110   " 
                        type="button"><FontAwesomeIcon icon={faCircleXmark}/></button>
                    </div>
                </div>

                <div className="m-4 p-4 w-3/5 shadow-md rounded-sm border border-lightgray">
                    <p className="text-black font-semibold">Your Comments:</p>
                    <div className="mt-2 h-48 border border-lightgray rounded-sm">
                        <textarea className="w-full h-full p-2" placeholder={`My experience with ${bannerConfig?.title.split(' ')[1]} is...`}></textarea>
                    </div>
                </div>

                <button className="ml-4 p-4 font-bold text-lg px-8 py-2 bg-blue text-white m-4 ml-0">Add Review</button>
            </form>

        </div>
    )
}

// ToDo: Fill out map with other values
function generateBannerSubtitle() {
    const dept = location?.href?.split('/')[5]?.substring(0, 2);
    const map = {
        'LE': 'Electrical Engineering & Computer Science'
    }
    return map[dept];
}