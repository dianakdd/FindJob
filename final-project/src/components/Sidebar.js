import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Dropdown, Avatar } from 'flowbite-react'
import Cookies from 'js-cookie'

const Sidebar = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({})

    const [showSidebar, setShowSidebar] = useState(false);


    const handleLogout = () => {
        Cookies.remove('token')
        Cookies.remove('user_data')
        navigate('/login')
    }

    useEffect(() => {
        if(Cookies.get('user_data') !== undefined) {
            setUser(JSON.parse(Cookies.get('user_data')))
        }
    }, [])

    return (
        <>
        <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div class="px-3 py-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                <div class="flex items-center justify-start">
                    {showSidebar ? (
                    <button onClick={() => setShowSidebar(!showSidebar)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Open sidebar</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                        </svg>
                    </button>
                    ) : (
                        <button onClick={() => setShowSidebar(!showSidebar)} data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span class="sr-only">Open sidebar</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                            </svg>
                        </button>
                    )}

                    <div
                        className={`top-16 left-0 w-[50vw] align-start sm:hidden bg-white text-white fixed h-full z-[100]  ease-in-out duration-300 ${
                        showSidebar ? "translate-x-0" : "translate-x-[-100%]"
                        }`}
                    >
                        <aside class="" >
                            <div class=" w-full bg-white dark:bg-gray-800">
                                <ul class=" font-small">
                                    <li>
                                        <Link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                        <span class="ml-3">Dashboard</span>
                                        </Link>
                                    </li>
                                    <div class="inline-flex items-center justify-center w-full">
                                        <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                                        <span class="absolute px-2 text-xs font-small text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Manage Data</span>
                                    </div>
                                    <li>
                                        <Link to="/dashboard/list-job" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">List Job</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/create-job" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18V16H8V14H10V12H12V14H14V16H12V18H10Z" fill="currentColor" />
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Create Job</span>
                                        <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Admin</span>
                                        </Link>
                                    </li>
                                    <div class="inline-flex items-center justify-center w-full">
                                        <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                                        <span class="absolute px-2 text-xs font-small text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">User Setting</span>
                                    </div>
                                    <li>
                                        <Link to="/dashboard/profile" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/dashboard/change-password" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"/></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Change Password</span>
                                        </Link>
                                    </li>
                                    <div class="inline-flex items-center justify-center w-full">
                                        <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                                    </div>
                                    <li onClick={handleLogout}>
                                        <a class="flex items-center p-2 mt-0 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                                        <span class="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                            </aside>
                    </div>
                    <Link to="/" className="text-xl ml-4 font-bold dark:text-white">
                        FindJob
                    </Link>
                </div>
                <div class="flex items-center">
                    <div class="flex items-center ml-3">
                        <div>
                        <Dropdown
                            label={<Avatar alt="User settings" className="rounded-full object-cover" img={user.image_url} rounded={true}/>}
                            arrowIcon={false}
                            inline={true}
                            
                            >
                            <Link to="/dashboard/profile">
                                <Dropdown.Header>
                                    <span className="block text-sm">
                                    {user.name ?? 'undefined'}
                                    </span>
                                    <span className="block truncate text-sm font-medium">
                                    {user.email ?? 'undefined'}
                                    </span>
                                </Dropdown.Header>
                            </Link>
                            <Link to="/">
                                <Dropdown.Item>
                                    Home
                                </Dropdown.Item>
                            </Link>
                            <Link to="/dashboard/change-password">
                                <Dropdown.Item>
                                    Change Password
                                </Dropdown.Item>
                            </Link>
                            <Dropdown.Divider />
                            
                            <Dropdown.Item onClick={handleLogout}>
                                Sign out
                            </Dropdown.Item>
                        </Dropdown>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>
        </nav>

        

        <aside class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" >
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 font-medium">
                <li>
                    <Link to="/dashboard" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span class="ml-3">Dashboard</span>
                    </Link>
                </li>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-3 text-sm font-small text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">Manage Data</span>
                </div>
                <li>
                    <Link to="/dashboard/list-job" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">List Job</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/create-job" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 18V16H8V14H10V12H12V14H14V16H12V18H10Z" fill="currentColor" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z"
                            fill="currentColor"
                        />
                    </svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Create Job</span>
                    <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Admin</span>
                    </Link>
                </li>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                    <span class="absolute px-3 text-sm font-small text-gray-400 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">User Setting</span>
                </div>
                <li>
                    <Link to="/dashboard/profile" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/change-password" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 10.5C19.6569 10.5 21 11.8431 21 13.5V19.5C21 21.1569 19.6569 22.5 18 22.5H6C4.34315 22.5 3 21.1569 3 19.5V13.5C3 11.8431 4.34315 10.5 6 10.5V7.5C6 4.18629 8.68629 1.5 12 1.5C15.3137 1.5 18 4.18629 18 7.5V10.5ZM12 3.5C14.2091 3.5 16 5.29086 16 7.5V10.5H8V7.5C8 5.29086 9.79086 3.5 12 3.5ZM18 12.5H6C5.44772 12.5 5 12.9477 5 13.5V19.5C5 20.0523 5.44772 20.5 6 20.5H18C18.5523 20.5 19 20.0523 19 19.5V13.5C19 12.9477 18.5523 12.5 18 12.5Z"/></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Change Password</span>
                    </Link>
                </li>
                <div class="inline-flex items-center justify-center w-full">
                    <hr class="w-64 h-px  bg-gray-200 border-0 dark:bg-gray-700"/>
                </div>
                <li onClick={handleLogout}>
                    <a class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Sign Out</span>
                    </a>
                </li>
                
            </ul>
        </div>
        </aside>

        </>
    )
}

export default Sidebar