import axios from "axios"
import { useState } from "react"
export default function Login () {
    
    const [form, setForm] = useState({email: '', password: ''});
    const [message, setMessage] = useState('');

    const database = axios.create({
        baseURL: 'http://localhost:3000/api'
    })

    const handleFormInput = (field, value) => {
        const currentForm = form;
        currentForm[field] = value;
        setForm({...currentForm});
    }

    const submitForm = async (e) => {
        try {
            sessionStorage.removeItem('User');
            console.log(form);
            const result = await database.post('/user/login', form);
            const data = result['data'];
            if (data['valid'] === true) {
                sessionStorage.setItem('User', JSON.stringify(data))
                console.log(sessionStorage.getItem('User'))
                location.href = '/';
            } else {
                setMessage('*Invalid Credentials');
            }

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="flex m-auto min-w-max">
            <form className="bg-white drop-shadow-md mt-8 w-2/5 m-auto rounded-md p-4">
                <div>
                    <p className="font-bold text-3xl">Login</p>
                </div>

                <div className="w-full m-auto">
                    <input 
                        className={`w-full bg-lightgray text-lg p-2 mt-4 font-bold`}
                        type="email" placeholder="Email" onChange={(e) => handleFormInput('email', e.target.value)} required/>
                </div>

                <div className="w-full m-auto">
                    <input 
                        className={`w-full bg-lightgray text-lg p-2 mt-4 font-bold`}
                        type="password" placeholder="Password" onChange={(e) => handleFormInput('password', e.target.value)} required/>
                </div>

                <div className="mt-4 min-w-max">
                    <a 
                        className="text-blue font-bold"
                        href="/register">Sign-Up</a>
                    <a 
                        className="text-blue font-bold float-right"
                        href="/">Forgot Password?</a>
                </div>

                <div className="m-auto text-left mt-2">
                    <p className="text-sm text-red font-semibold">{message}</p>
                </div>

                <div className="">
                    <button
                        className="bg-red px-8 py-2 mt-4 font-bold text-white hover:bg-lightred transition delay-50 active:transform active:scale-95"
                        type="button"
                        onClick={(e) => submitForm(e)}
                    >Login</button>
                </div>
            </form>
        </div>

    )
}