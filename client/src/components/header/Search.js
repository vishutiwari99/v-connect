import React, { useState, useEffect } from 'react'
import UserCard from '../UserCard';
import { useDispatch, useSelector } from 'react-redux'
import { getDataAPI } from '../../utils/fetchData';
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import { Link } from 'react-router-dom'
const Search = () => {
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);
    const { auth } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (search === '') {
            setUsers([]);
        }
        if (search && auth.token) {
            getDataAPI(`search?username=${search}`, auth.token)
                .then(res => setUsers(res.data.users))
                .catch(err => {
                    dispatch({
                        type: GLOBALTYPES.ALERT,
                        payload: {
                            error: err.response.data.msg
                        }
                    })
                })
        }
    }, [search, auth.token, dispatch])

    return (
        <form className="flex-grow ml-2">
            <div className="relative lg:flex items-center">
                <input className="pl-6  rounded-lg focus:outline-none focus:shadow-md" type="text" name="search" value={search} placeholder="Search"
                    onChange={e => setSearch(e.target.value.toLowerCase().replace(/ /g, ''))}
                />
                <span className="material-icons absolute left-0 items-center ">search</span>
                {
                    search.length > 0 &&
                    <span onClick={() => {
                        setSearch('');
                        setUsers('');
                    }} className="material-icons absolute right-6 cursor-pointer">
                        close
                    </span>
                }
            </div>
            <div className='absolute flex flex-col'>
                {
                    users &&
                    users.map(user => (
                        <Link onClick={() => setSearch('')} key={user._id} to={`/profile/${user._id}`}>
                            <UserCard user={user} />
                        </Link>
                    ))

                }
            </div>

        </form>
    )
}

export default Search
