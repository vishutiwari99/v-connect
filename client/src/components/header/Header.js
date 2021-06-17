import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
    return (
        <nav className="flex flex-col justify-around pb-4 lg:flex-row md:pl-5 items-center  bg-gray-100 text-gray-500">
            <Link to="/" className="flex-1">
                <span className="font-semibold text-xl">Vconnect</span>
            </Link>
            <Search />
            <div className="absolute  bottom-0 w-full lg:relative flex-grow">
                <Menu />
            </div>
        </nav >

    )
}

export default Header


