import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import YourReviews from "./YourReviews/YourReviews";

export default function Profile () {
    const User = JSON.parse(sessionStorage.getItem('User'))['User'];

    const [showErrorNotification, setShowErrorNotify] =  useState(false);
    const [showSaveBtn, setShowSaveBtn] = useState(false);
    const [newUserDetails, setNewUserDetails] = useState({...User})

    const handleNewUserDetails = (field, value) => {
        const _newUserDetails = {...newUserDetails};
        _newUserDetails[field] = value;
        setNewUserDetails({..._newUserDetails});
        console.log(_newUserDetails);
    }

    const handleNewUserInfo = () => {
        const originalKeys = Object.keys(User);
        originalKeys.forEach(key => {
            if (User[key] !== newUserDetails[key]) {
                setShowSaveBtn(true);
            }
        });
    }

    const database = axios.create({
        baseURL: 'http://localhost:3000/api/user'
    })

    const submitNewInfo = async () => {
        try {
            const updated = await database.post('/updateInfo', newUserDetails);
            if (!updated)
                alert('Error on submitting new profile changes');
            
            if (updated['data'] === false) {
                
            }
        } catch (e) {
            console.log(e);
        }
    }

    const logout = () => {
        sessionStorage.removeItem('User');
        location.href='/';
    }

    return (
        <div className="m-auto w-3/5 mt-8 p-4 min-w-fit">

            <div className="flex justify-center items-center w-full min-w-full" id="header">
                <img className="w-32 h-32 rounded-full" src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="" />

                <div className=" w-full h-fit ml-4" id="NameHeader">
                    <p className="font-bold text-black text-3xl m-0 pb-0">{User?.FirstName+' '+User?.LastName}</p>
                    <p className="font-bold text-gray text-1xl pt-0 m-0 mt-[-10px]">{User?.Major} @ YU</p>
                    <button onClick={logout}><FontAwesomeIcon className="text-gray" icon={faRightFromBracket}/></button>
                </div>
            </div>
            <div className="bg-white mt-8 p-4 rounded-md drop-shadow-md min-w-full">
                <p className="font-bold text-2xl text-black">Personal Info</p>
                <table>
                    <tbody>
                        <tr className="mt-2 w-full flex">
                            <td className="flex ">
                                <p className="w-32">First Name:</p>
                                <input 
                                    type="text" 
                                    className="w-64 pl-2 mx-2"
                                    value={newUserDetails['FirstName']}
                                    onChange={(e) => handleNewUserDetails('FirstName', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                            <td className="flex ">
                                <p className="w-32">Last Name:</p>
                                <input 
                                    type="text" 
                                    className="w-64 pl-2 mx-2"
                                    value={newUserDetails['LastName']}
                                    onChange={(e) => handleNewUserDetails('LastName', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                        </tr>
                        <tr className="mt-2 w-full flex">
                            <td className="flex ">
                                <p className="w-32">Email:</p>
                                <input 
                                    type="email" 
                                    className="w-64 pl-2 mx-2"
                                    value={newUserDetails['Email']}
                                    onChange={(e) => handleNewUserDetails('Email', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                            <td className="flex ">
                                <p className="w-32">Password:</p>
                                <input 
                                    type="password"
                                    readOnly
                                    className="w-64 pl-2 mx-2"
                                    value={newUserDetails['password']}
                                    onChange={(e) => handleNewUserDetails('password', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                        </tr>
                        <tr className="mt-2 w-full flex">
                            <td className="flex ">
                                <p className="w-32">Major:</p>
                                <input 
                                    type="text" 
                                    className="w-64 pl-2 mx-2"
                                    value={newUserDetails['Major']}
                                    onChange={(e) => handleNewUserDetails('Major', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                            <td className="flex w-fit">
                                <p className="w-32">Bio:</p>
                                <input 
                                    type="text" 
                                    className="pl-2 mx-2"
                                    value={newUserDetails['Bio']}
                                    onChange={(e) => handleNewUserDetails('Bio', e.target.value)}
                                    onFocus={() => handleNewUserInfo()}
                                    onBlur={() => handleNewUserInfo()} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {
                                    showSaveBtn && <button onClick={() => submitNewInfo()} className="font-bold text-lg px-8 py-2 bg-blue text-white m-4 ml-0">Save</button>
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <YourReviews/>
        </div>
    )
} 