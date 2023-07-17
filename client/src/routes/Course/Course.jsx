// import './Course.css';
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
            <div className="border border-black w-3/5 m-auto">
                <ReviewDisplay/>

                <div
                    className="border border-blue p-2"
                    id="actionCenter"
                >
                    <button
                        className="border border-red py-4 px-2 font-bold text-white bg-red shadow-md"
                        onClick={() => {
                            const code = location.href.split('/')[4];
                            window.location = `/review/${code}`;
                        }}
                    >Add Your Review</button>
                </div>


            </div>
        </div>
    )
}

function convertCourseUrlToBannerTitle(url) {
    const _url = url.split('/'); 
    const _courseCode = _url[_url.length-1].split('-');
    return `${_courseCode[1]} ${_courseCode[2]}` 
}