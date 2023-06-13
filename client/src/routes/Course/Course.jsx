import './Course.css';
import Banner from "../../components/Banner/Banner"
import ReviewDisplay from "../../components/ReviewDisplay/ReviewDisplay"

const bannerConfig = {
    title: convertCourseUrlToBannerTitle(location.href),
    subTitle: 'Software Design'
}

export default function Course () {
    return (
        <div className="Course">
            <Banner data={bannerConfig}/>
            <div className="CourseReviews">
                <ReviewDisplay/>
            </div>
        </div>
    )
}

function convertCourseUrlToBannerTitle(url) {
    const _url = url.split('/'); 
    const _courseCode = _url[_url.length-1].split('-');
    return `${_courseCode[1]} ${_courseCode[2]}` 
}