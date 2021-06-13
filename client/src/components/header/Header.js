import React from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
    return (
        <nav className="flex  justify-between  bg-gray-100 text-gray-500  items-center pl-5">
            <Link to="/">
                <span className="font-semibold text-xl">Vconnect</span>
            </Link>
            <Search />
            <Menu />


        </nav >

    )
}

export default Header


