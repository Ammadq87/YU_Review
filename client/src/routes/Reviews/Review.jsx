import Banner from "../../components/Banner/Banner"

const bannerConfig = {
    title:  `${location.href.split('/')[4].split('-').splice(1,2).join('-')}`,
    subTitle: 'Software Design'
};

export default function Review () {
    return (
        <div>
            <Banner data={bannerConfig}/>
            <form className="bg-white drop-shadow-md mt-8 w-2/5 m-auto rounded-md p-4" action="">
            <div>
                <p className="font-bold text-3xl">Review</p>
            </div>

            <div className="w-full m-auto flex mt-4">
                <input 
                    className={`w-full bg-lightgray text-lg p-2 mr-2 font-bold`}
                    value={location.href.split('/')[4]} readOnly/>

                <input 
                    className={`w-full bg-lightgray text-lg p-2 ml-2 font-bold`}
                    type="text" placeholder="Professor" required/>
            </div>

            <div className="w-full m-auto">
                <input 
                    className={`w-full bg-lightgray text-lg p-2 mt-4 font-bold`}
                    type="email" placeholder="Email" required/>
            </div>

            <div className="w-full m-auto">
                <input 
                    className={`w-full bg-lightgray text-lg p-2 mt-4 font-bold`}
                    type="password" placeholder="Password" required/>
            </div>

            <div className="w-full m-auto">
                {}
                <input 
                    className={`w-full bg-lightgray text-lg p-2 mt-4 font-bold`}
                    type="password" placeholder="Confirm Password" required/>
            </div>

            <div className="mt-4">
                <a 
                    className="text-blue font-bold"
                    href="/">Have an account already?</a>
            </div>

            <div className="">
                <button
                    className="bg-red px-8 py-2 mt-4 font-bold text-white hover:bg-lightred transition delay-50 active:transform active:scale-95"
                    type="submit"
                >Get Started!</button>
            </div>
        </form>
        </div>
    )
}