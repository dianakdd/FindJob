import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState(
        {
           name:"",
           image_url:"",
           email:"",
           password:"",
        }
    )

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value }) 
    }

    //handlingRegister
    const handleRegister = (event) => {
        event.preventDefault()
        // console.log(input)

        let {
            name,
            image_url,
            email,
            password,
        } = input

        axios.post('https://dev-example.sanbercloud.com/api/register', {
            name,
            image_url,
            email,
            password,
        })
        .then((res) => {
            let {data} = res
            console.log(data)
            navigate('/login')
        })
        .catch((error) => {
            alert(error)
        })

        //clear input setelah create data
        setInput(
            {
                name:"",
                image_url:"",
                email:"",
                password:"",
            }
        )
    }

    return (
    <>
        <div className='max-[640px]:m-6'>
            <div class="mt-4 w-full h-full max-w-sm bg-white shadow-md rounded-lg text-left  sm:my-14 dark:bg-gray-800 dark:border-gray-700 mx-auto">
                <div class="h-2 bg-black rounded-t-md"></div>
                
                <form onSubmit={handleRegister} className="space-y-6" >
                    <div class="text-center my-6">
                        <h1 class="text-3xl font-semibold text-gray-700">Sign Up</h1>
                        <p class="text-gray-500">Sign Up to access your account</p>
                    </div>
                    <div class="px-8 py-6 ">
                        <label htmlFor="name" class="block font-semibold"> Name </label>
                        <input onChange={handleInput} value={input.name} type="text" name="name" id="name" placeholder="Name" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <label htmlFor="image" class="block mt-3 font-semibold"> Link Image </label>
                        <input onChange={handleInput} value={input.image_url} type="text" name="image_url" id="image" placeholder="Link Image" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <label htmlFor="email" class="block mt-3 font-semibold"> Email </label>
                        <input onChange={handleInput} value={input.email} type="email" name="email" id="email" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <label htmlFor="password" class="block mt-3 font-semibold"> Password </label>
                        <input onChange={handleInput} value={input.password} type="password" name="password" id="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"/>
                        
                        <div className="flex items-start pt-2 my-3">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" defaultValue className="w-4 h-4 border text-black border-gray-300 rounded bg-gray-50 focus:ring-black accent-black" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        
                        <div class="flex justify-between items-baseline">
                            <button type="submit" class="mt-4 max-[640px]:text-xs max-[640px]:mx-2  max-[640px]:w-7/12 bg-black text-white py-2 px-6 rounded-md hover:bg-black-600 ">Sign Up</button>
                            <div className="text-sm font-medium max-[640px]:text-xs max-[640px]:m-2 text-gray-500 dark:text-gray-300">
                            Already have an account? <Link to="/login" className="text-black-700 font-bold hover:underline dark:text-black">Sign In</Link>
                            </div>
                        </div>
                        
                    </div>
                </form> 
            </div>
        </div>
    </>
  )
}

export default Register