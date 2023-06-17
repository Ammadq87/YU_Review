export default function Login () {
    return (
        <div className="flex m-auto min-w-max">
            <form className="bg-white drop-shadow-md mt-8 w-2/5 m-auto rounded-md p-4">
                <div>
                    <p className="font-bold text-3xl">Login</p>
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

                <div className="mt-4 min-w-max">
                    <a 
                        className="text-blue font-bold"
                        href="/">Sign-Up</a>
                    <a 
                        className="text-blue font-bold float-right"
                        href="/">Forgot Password</a>
                </div>

                <div className="">
                    <button
                        className="bg-red px-8 py-2 mt-4 font-bold text-white hover:bg-lightred transition delay-50 active:transform active:scale-95"
                        type="submit"
                    >Login</button>
                </div>
            </form>
        </div>

    )
}