import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../redux/actions/authAction'
import DarkModeToggle from "react-dark-mode-toggle";
import Avatar from './Avatar'

const navLinks = [
    {
        label: 'Home', icon: <span className="material-icons ">
            home
        </span>, path: '/'
    },
    {
        label: 'Message', icon: <span className="material-icons">
            near_me
        </span>
        , path: '/message'
    },
    {
        label: 'Discover', icon: <span className="material-icons ">
            explore
        </span>, path: '/discover'
    },
    {
        label: 'Notify', icon: <span className="material-icons ">
            favorite
        </span>
        , path: '/notify'
    }
]
const Menu = () => {
    const dispatch = useDispatch();

    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const { auth } = useSelector(state => state);
    const [dropDown, setDropDown] = useState(false);
    const { pathname } = useLocation();
    const isActive = (pn) => {
        if (pn === pathname) return 'text-black'
    }
    return (
        <div className="flex">
            <ul className="flex space-x-4  items-center ">
                {navLinks.map((link, index) => (
                    <li className={`${isActive(link.path)}`} key={index}>
                        <Link to={link.path}>
                            {link.icon}
                        </Link>
                    </li>
                ))}
            </ul>

            <div onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="dropdown  items-center  inline-block relative">
                <Avatar icon="account_circle" />
                <ul className={`dropdown-menu ${dropDown ? "block" : "hidden"}  absolute  text-gray-700 pt-1`}>
                    <li className=""><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`/profile/${auth.username._id}`}>Profile</Link></li>
                    <li className=""><div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Darkmode</div></li>
                    <li className=""><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => dispatch(logout())} to="/">Logout</Link></li>
                </ul>
                {/* <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg> */}
            </div>
            <div className=" flex items-center pr-8">
                <DarkModeToggle
                    onChange={() => setIsDarkMode(!isDarkMode)}
                    checked={isDarkMode}
                    size={50}
                    className="items-center "
                />
            </div>
        </div>

    )
}

export default Menu
