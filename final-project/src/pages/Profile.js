import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

const Profile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
      if(Cookies.get('user_data') !== undefined) {
          setUser(JSON.parse(Cookies.get('user_data')))
      }
  }, [])

  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
        Profile
      </h1>
      <h2 className="text-gray-400 text-md">
        You can edit as you like!
      </h2>
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-md sm:p-5 md:p-8 my-10 dark:bg-gray-800 dark:border-gray-700 mx-auto p-10">
        <form className="container max-w-2xl mx-auto">
          <img className="w-32 h-32 mb-6 rounded-full shadow-lg mx-auto object-cover" src={user.image_url} alt="profile" />
          <div className="mb-3">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
              <input value={user.name ?? 'undefined'} name="name" type="text" id="name" disabled className="cursor-not-allowed shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
          <div className="mb-3">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
              <input value={user.email ?? 'undefined'} name="email" type="text" id="email" disabled className="cursor-not-allowed shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
          </div>
        </form>
      </div>
      
    </>
  )
}

export default Profile