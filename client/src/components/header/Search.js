import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataAPI } from '../../utils/fetchData';

const Search = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (search && auth.token) {
            getDataAPI(`search?username=${search}`, auth.token)
                .then(res => console.log(res));
        }
    }, [search, auth.token])
    return (
        <form>
            <div className="relative flex items-center">
                <input className="pl-6 rounded-lg focus:outline-none focus:shadow-md" type="text" name="search" value={search} placeholder="Search"
                    onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
                />
                <span className="material-icons absolute  items-center">search</span>
                {/* <span className="absolute">Search</span> */}
                {
                    search.length > 0 &&
                    <span onClick={() => setSearch('')} className="material-icons absolute right-6 cursor-pointer">
                        close
                    </span>
                }
            </div>

        </form>
    )
}

export default Search
