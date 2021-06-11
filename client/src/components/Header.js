import React, { useState } from 'react'
import { HomeIcon, ChatAltIcon, HeartIcon, BellIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/authAction'


const Header = () => {
    const dispatch = useDispatch();
    const [dropDown, setDropDown] = useState(false);
    const navLinks = [
        { label: 'Home', icon: <HomeIcon className="h-7" />, path: '/' },
        { label: 'Message', icon: <ChatAltIcon className="h-7" />, path: '/message' },
        { label: 'Discover', icon: <HeartIcon className="h-7" />, path: '/discover' },
        { label: 'Notify', icon: <BellIcon className="h-7" />, path: '/notify' }
    ]
    return (
        <nav className="flex justify-between bg-gray-100 items-center pl-5">
            <div>
                <span className="font-semibold text-xl">Vconnect</span>
            </div>
            <div>
                <ul className="flex space-x-4 mr-8 m-2 items-center">
                    {
                        navLinks.map((link, index) => (
                            <li key={index}>
                                <Link to={link.path}>
                                    <span>{link.icon}</span>
                                </Link>
                            </li>
                        ))
                    }
                    <li>
                        <div onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="dropdown inline-block relative">
                            <div className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center ">
                                <span className="mr-1">User</span>
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                            </div>
                            <ul className={`dropdown-menu ${dropDown ? "block" : "hidden"}  absolute  text-gray-700 pt-1`}>
                                <li className=""><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`/profile`}>Profile</Link></li>
                                <li className=""><div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" >Darkmode</div></li>
                                <li className=""><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => dispatch(logout())} to="/">Logout</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </nav >

    )
}

export default Header
