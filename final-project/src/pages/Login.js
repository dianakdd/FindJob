import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

const Login = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState(
        {
            email : "",
            password : ""
        }
    )

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value }) 
    }

    //handlingLogin
    const handleLogin = (event) => {
        event.preventDefault()

        let {
            email,
            password,
        } = input

        axios.post('https://dev-example.sanbercloud.com/api/login', {email, password})
        .then((res) => {
            let {data} = res
            // console.log(data)

            let {token, user} = data

            Cookies.set('token', token, {expires : 1})
            Cookies.set('user_data', JSON.stringify(user), {expires : 1})
            console.log(user)
            navigate('/dashboard')
        })
        .catch((error) => {
            alert(error)
        })
    }

    return(
        <>
            <div className='max-[640px]:m-6'>
                <div class="mt-4 w-full h-full max-w-sm bg-white shadow-md rounded-lg text-left sm:my-14 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <div class="h-2 bg-black rounded-t-md"></div>
                <form onSubmit={handleLogin} className="space-y-6" >
                    <div class="text-center my-6">
                        <h1 class="text-3xl font-semibold text-gray-700">Sign in</h1>
                        <p class="text-gray-500">Sign In to access your account</p>
                    </div>
                    <div class="px-8 py-6 ">

                        <label class="block font-semibold"> Email </label>
                        <input value={input.email} onChange={handleInput} type="email" name={"email"} id="email" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <label class="block mt-3 font-semibold"> Password </label>
                        <input value={input.password} onChange={handleInput} type="password" name={"password"} id="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <div className="flex items-start pt-2 my-3">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border text-black border-gray-300 rounded bg-gray-50 focus:ring-black accent-black" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        
                        <div class="flex justify-between items-baseline max-[640px]:flex-row">
                            <button type="submit" class="mt-4 max-[640px]:text-xs max-[640px]:mx-2 max-[640px]:w-7/12 bg-black text-white py-2 px-6 rounded-md hover:bg-black-600 ">Sign In</button>
                            <div className="text-sm font-medium max-[640px]:text-xs max-[640px]:m-2 text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/register" className="text-black-700 font-bold hover:underline dark:text-black">Create account</Link>
                            </div>
                        </div>
                        
                    </div>
                </form> 
                </div>
                
                <div class="max-w-sm mx-auto max-[640px]:mt-6">
                    <a class="block max-w-sm p-6 mb-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <p class="font-medium text-center mb-2 text-gray-900 dark:text-gray-400">Silahkan login menggunakan akun admin, jika tidak ingin membuat akun</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Email: admin@test.com</p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Password: 12345678</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Login