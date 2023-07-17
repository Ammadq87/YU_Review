import { useState } from "react";

export default function Register () {
    const [onFocus, setOnFocus] = useState(false);

    return (
        <form className="bg-white drop-shadow-md mt-8 w-2/5 m-auto rounded-md p-4" action="">
            <div>
                <p className="font-bold text-3xl">Register</p>
            </div>

            <div className="w-full m-auto flex mt-4">
                <input 
                    className={`w-full bg-lightgray text-lg p-2 mr-2 font-bold`}
                    type="text" placeholder="First Name" required/>

                <input 
                    className={`w-full bg-lightgray text-lg p-2 ml-2 font-bold`}
                    type="text" placeholder="Last Name" required/>
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
    )
}