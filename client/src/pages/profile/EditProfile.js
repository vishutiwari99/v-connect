import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GLOBALTYPES } from '../../redux/actions/globalTypes'

import { checkImage } from '../../utils/imageUpload'

const initState = {
    fullname: '', mobile: '', address: '', website: '', story: '', gender: ''
}
const EditProfile = ({ user, setOnEdit }) => {
    const [userData, setUserData] = useState(initState)
    const { fullname, mobile, address, website, story, gender } = userData
    const [avatar, setAvatar] = useState('')

    const { auth, theme } = useSelector(state => state)
    const dispatch = useDispatch();
    useEffect(() => {
        setUserData(auth.user)
    }, [auth.user])

    const handleInput = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }


    const changeAvatar = (e) => {
        const file = e.target.files[0];
        const err = checkImage(file)
        if (err) return dispatch({
            type: GLOBALTYPES.ALERT, payload: { error: err }
        })
        setAvatar(file)
    }

    return (
        <div className="absolute top-0 left-0 w-full  bg-gray-600  overflow-auto">
            <span style={{ fontSize: '3rem' }} onClick={() => setOnEdit(false)} className="material-icons cursor-pointer  m-2 text-white hover:text-gray-300 absolute right-0">
                close
            </span>
            <form className="flex  max-w-xl  bg-white p-1 rounded-lg m-5 mx-auto flex-col" action="">
                <div className=" flex flex-col justify-center items-center w-58 group   overflow-hidden rounded-2xl relative m-4 mx-auto ">
                    <img className='block' src={avatar ? URL.createObjectURL(avatar) : auth.user.avatar} alt="avatar" />
                    <span className='absolute left-16  justify-center items-center -bottom-12 group-hover:bottom-2 transition delay-300 duration-300 ease-in-out'>
                        <span className="material-icons text-yellow-600">
                            photo_camera
                        </span>
                        <p className="text-yellow-600">Change</p>
                        <input type="file" className="absolute top-0 left-0 w-full h-full cursor-pointer opacity-0 " name="file" id="file_up"
                            accept="image/*" onChange={changeAvatar} />
                    </span>
                </div>
                <div className="relative m-2">
                    <label htmlFor="fullname">FullName</label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" name="fullname" value={fullname} onChange={handleInput} />
                    <small className="relative block text-red-600 text-right"
                    >
                        {fullname.length}/25
                    </small>


                </div>
                <div className="m-2" >
                    <label htmlFor="mobile">Mobile</label>
                    <input type="number" name="mobile" value={mobile}
                        className="shadow  appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} />
                </div>

                <div className="m-2" >
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" value={address}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} />
                </div>

                <div className="m-2" >
                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" value={website}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} />
                </div>

                <div className="m-2">
                    <label htmlFor="story">Story</label>
                    <textarea name="story" value={story} cols="30" rows="4"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleInput} />

                    <small className="text-red-600 block text-right">
                        {story.length}/200
                    </small>
                </div>

                <div className=" m-2 px-1  mb-4 flex justify-center items-center">
                    <label htmlFor="gender" className="px-4">Gender</label>
                    <select name="gender" id="gender" value={gender}
                        className="p-2 border-none rounded-xl"
                        onChange={handleInput}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button className="p-2  bg-blue-500 text-white rounded-xl hover:bg-blue-400" type="submit">Save</button>
            </form>

        </div>
    )
}

export default EditProfile
