import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
    return (
        <nav className="flex flex-col pb-4 md:flex-row   md:pl-5 items-center justify-between  bg-gray-100 text-gray-500">
            <Link to="/">
                <span className="font-semibold text-xl">Vconnect</span>
            </Link>
            <Search />
            <div className="absolute bottom-0 lg:relative ">
                <Menu />
            </div>
        </nav >

    )
}

export default Header


