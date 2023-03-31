import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

const Dashboard = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
      if(Cookies.get('user_data') !== undefined) {
          setUser(JSON.parse(Cookies.get('user_data')))
      }
  }, [])

  return (
    <>
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Halo {user.name ?? 'undefined'}! 
        </h1>
        <h2 className="text-gray-400 text-md">
            Welcome to dashboard
        </h2>
    </>
    
  )
}

export default Dashboard