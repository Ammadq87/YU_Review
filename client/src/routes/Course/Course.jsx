// import './Course.css';
import { useState } from "react";
import Banner from "../../components/Banner/Banner"
import Notification from "../../components/Notification/Notification";
import ReviewDisplay from "../../components/ReviewDisplay/ReviewDisplay"

const bannerConfig = {
    title: convertCourseUrlToBannerTitle(location.href),
    subTitle: 'Software Design'
}

export default function Course () {

    const [showLoginNotification, setShowLoginNotification] = useState(null);

    //#region Add Review Button
    /**
     * Redirects user to Review page if they are logged in
     * @returns 
     */
    const addReview = () => {
        const User = sessionStorage.getItem('User');
        if (!User) {
            setShowLoginNotification({type: 'error', text:'Login to leave a review'})
            return;
        }
        const code = location.href.split('/')[4];

        // When rendering Review page, add course details to session storage for page use only
        sessionStorage.setItem(code, {});
        window.location = `/course/review/${code}`;
    }
    //#endregion

    return (
        <div className="Course">
            <Banner data={bannerConfig}/>
            <div className="border border-black w-3/5 m-auto">
                <ReviewDisplay/>

                <div
                    className="border border-blue p-2"
                    id="actionCenter"
                >
                    <button
                        className="border border-red py-4 px-2 font-bold text-white bg-red shadow-md"
                        onClick={() => {addReview()}}
                    >Add Your Review</button>
                </div>
                
                {
                    showLoginNotification !== null &&
                    <Notification data={showLoginNotification}/>
                }

            </div>
        </div>
    )
}

function convertCourseUrlToBannerTitle(url) {
    const _url = url.split('/'); 
    const _courseCode = _url[_url.length-1].split('-');
    return `${_courseCode[1]} ${_courseCode[2]}` 
}