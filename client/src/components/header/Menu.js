import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import { logout } from '../../redux/actions/authAction'
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

    // const [isDarkMode, setIsDarkMode] = useState(() => false);
    const { auth } = useSelector(state => state);
    const [dropDown, setDropDown] = useState(false);
    const { pathname } = useLocation();
    const isActive = (pn) => {
        if (pn === pathname) return 'text-black'
    }
    return (
        <>

            <ul className="flex m-2  ml-4 mr-4  justify-evenly items-center ">
                {navLinks.map((link, index) => (
                    <li className={`${isActive(link.path)}`} key={index}>
                        <Link to={link.path}>
                            {link.icon}
                        </Link>
                    </li>
                ))}
                <li onMouseEnter={() => setDropDown(true)} onMouseLeave={() => setDropDown(false)} className="dropdown  items-center  inline-flex relative lg:inline-block">
                    <Avatar src={auth.user.avatar} size="h-6" />
                    <ul className={`dropdown-menu ${dropDown ? "block" : "hidden"} mb-36 absolute  text-gray-700  pb-15`}>
                        <li ><Link className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" to={`/profile/${auth.user._id}`}>Profile</Link></li>
                        <li ><div className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Darkmode</div></li>
                        <li ><Link className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={() => dispatch(logout())} to="/">Logout</Link></li>
                    </ul>
                    {
                        <>

                            <span className="material-icons">
                                expand_more
                            </span>

                            <span className="material-icons">
                                expand_less
                            </span>
                        </>
                    }
                </li>
            </ul>



        </>



    )
}

export default Menu
