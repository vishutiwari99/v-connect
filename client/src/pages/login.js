import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { LockClosedIcon, GlobeIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/solid'
// actions import
import { loginAPI } from '../redux/auth/authSlice'
import Notify from '../components/alert/Toast'
import Loading from '../components/alert/Loading'
const Login = () => {
    const initialState = { email: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { email, password } = userData;
    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();
    const status = useSelector(state => state.auth.status)

    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAPI(userData));

    }
    return (<>
        {/* {status && <Notify message={status} />} */}
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    {/* {status === 'loading' && <Loading />} */}
                    {/* <img
                        className="mx-auto h-20 w-auto"
                        src="./mainlogo.svg"
                        alt="Workflow"
                    /> */}
                    <GlobeIcon className="mx-auto h-32 w-auto text-indigo-400" />

                    <h2 className="mt-2 text-center text-3xl font-extrabold text-indigo-600">V-connect</h2>
                    <h2 className="mt-5 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6"  >
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className=" sr-only">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type={visible ? "text" : "password"}
                                autoComplete="current-password"
                                required
                                value={password}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500  sm:text-sm"
                                placeholder="Password"
                                onChange={handleChangeInput}
                            />
                            <span onClick={() => setVisible(!visible)} className="absolute right-0 inset-y-0  flex items-center ">
                                {visible ? <EyeIcon className="h-5 w-10" /> : <EyeOffIcon className="h-5 w-10" />}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember_me"
                                name="remember_me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"

                            />
                            <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                Remember me
                </label>
                        </div>

                        <div className="text-sm">
                            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                Forgot your password?
                </Link>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 
                            ${(!email || !password) ? "disabled:opacity-50 ..." : ""} 
                            `}
                            disabled={(!email || !password) ? true : false}
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                            </span>
                Sign in
              </button>
                        <p className="mt-2 p-2">You don't have an account ?
                            <Link to="/register">
                                <span className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Register Now
                                </span>
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div >
    </>
    )
}

export default Login
