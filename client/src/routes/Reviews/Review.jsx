import Banner from "../../components/Banner/Banner"

const bannerConfig = {
    title:  `Rate: ${location?.href?.split('/')[4]?.split('-').splice(1,2).join('-')}`,
    subTitle: 'Software Design' //retrieve from sessionStorage
};

export default function Review () {
    const isCourseReview = location?.href?.split('/')[4].indexOf('-') !== -1;


    return (
        <div>
            <Banner data={bannerConfig}/>
            <div
                id="parent"
            >

                <form action="">

                    {
                        isCourseReview &&
                        <div>
                            <p>Professor: </p>
                            <input type="text" placeholder="Name"/>
                        </div> 
                    }

                    {
                        isCourseReview &&
                        <div>
                            <p>Course: </p>
                            <input type="text" placeholder="Name"/>
                        </div> 
                    }

                    

                </form>

            </div>
        </div>
    )
}