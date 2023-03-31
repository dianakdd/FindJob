import React, { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useNavigate } from "react-router-dom"

const ChangePassword = () => {

  let navigate = useNavigate()

  const [input, setInput] = useState(
    {
      current_password:"",
      new_password:"",
      new_confirm_password:"",
    }
  )

  //handling input
  const handleInput = (event) => {
    let name = event.target.name
    let value = event.target.value

    setInput({ ...input, [name]: value }) 
  }

  //handling change password
  const handleChangePassword = (event) => {
    event.preventDefault()
    // console.log(input)

    let {
      current_password,
      new_password,
      new_confirm_password,
    } = input

    axios.post('https://dev-example.sanbercloud.com/api/change-password', 
      {
        current_password,
        new_password,
        new_confirm_password,
      },
      {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}}
    )
    .then((res) => {
      console.log(res)
      navigate('/dashboard/change-password')
    })
    .catch((error) => {
        alert(error)
    })

    //clear input setelah create data
    setInput(
      {
        current_password:"",
        new_password:"",
        new_confirm_password:"",
      }
    )
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        Change Password
      </h1>
      <h2 className="text-gray-400 text-md">
        Change your password here!
      </h2>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-md sm:p-5 md:p-8 my-10 dark:bg-gray-800 dark:border-gray-700 mx-auto p-10">
        <form onSubmit={handleChangePassword} className="container max-w-2xl mx-auto">
          <div className="mb-3">
              <label htmlFor="current_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
              <input onChange={handleInput} value={input.current_password} name="current_password" type="password" id="current_password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-3">
              <label htmlFor="new_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
              <input onChange={handleInput} value={input.new_password} name="new_password" type="password" id="new_password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-3">
              <label htmlFor="new_confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Confirm Password</label>
              <input onChange={handleInput} value={input.new_confirm_password} name="new_confirm_password" type="password" id="new_confirm_password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <button type="submit" className="text-white text-white bg-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
        </form>
      </div>
    </>
  )
}

export default ChangePassword