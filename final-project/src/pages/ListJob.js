import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { Button } from 'flowbite-react'

const ListJob = () => {
    const {state, handleFunction} = useContext(GlobalContext)
    let {data, setData, fetchStatus, setFetchStatus} = state
    let {handleDelete, handleEdit, truncateString} = handleFunction 
    const[display, setDisplay] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
        axios.get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => {
                setData([...res.data.data])
            })
            .catch((error) => {
                console.groupCollapsed(error)
                alert(error)
            })
        setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus, setData])

    const handleChangeSearch = (event) => setSearch(event.target.value)
    const handleSearch = (event) => {
        event.preventDefault()
        console.log(search)

        let fetchData = async () => {
            // setData(null)
            setDisplay(true)
            let {data} = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let dataJob = data.data

            // console.log(dataJob)

            let searchData = dataJob.filter((res) => {
                return Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase())
            })
            console.log(searchData)

            setDisplay(false)
            setData([...searchData])
        }
        fetchData()
        setSearch("")
    }

    const [filter, setFilter] = useState({
        job_type : "",
        job_tenure : "",
        company_city : "",
    })

    const handleChangeFilter = (event) => {
        setFilter({...filter, [event.target.name] : event.target.value})
    }

    const handleFilter = (event) => {
        event.preventDefault()
        console.log(filter)

        console.log(search)

        let fetchData = async () => {
            setData(null)
            setDisplay(true)
            let {data} = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
            let dataJob = data.data

            console.log(dataJob)

            let filterData = dataJob.filter((res) => {
                return res.job_type === filter.job_type || res.job_tenure === filter.job_tenure || res.company_city === filter.company_city
            })
            console.log(filterData)

            setDisplay(false)
            setData([...filterData])
        }
        fetchData()
        setFilter(
            {
            job_type : "",
            job_tenure : "",
            company_city : "",
            }
        )
    }

    return (
    <>
        <div className="container w-full mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
                List Job
            </h1>
            <h2 className="text-gray-400 text-md">
                Here is our job list!
            </h2>
            {/* Search Data */}
            <div className="flex mt-5">
                <form onSubmit={handleSearch} className="w-full">   
                    <label htmlFor="default-search" className="mb-5 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </div>
                        <input onChange={handleChangeSearch} value={search} type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-black focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200" placeholder="Search Job, Company Name..." required />
                        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-gradient-to-br bg-blue-500 focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-4 py-2">Search</button>
                    </div>
                </form>
                <button onClick={() => setFetchStatus(true)} class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-l px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-36 ml-5 max-[640px]:px-1">Reset Data</button>
            </div>

            {/* Filter Data */}
            <div className="flex mt-5">
                <form onSubmit={handleFilter} className="w-full">   
                    <div className="mt-2">
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Type</label>
                        <input onChange={handleChangeFilter} value={filter.job_type} name="job_type" type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-black focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200" />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Job Tenure</label>
                        <input onChange={handleChangeFilter} value={filter.job_tenure} name="job_tenure" type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-black focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200" />
                    </div>
                    <div className="mt-2">
                        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                        <input onChange={handleChangeFilter} value={filter.company_city} name="company_city" type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-black focus:border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200" />
                    </div>
                    <button type="submit" class="text-blue-700 mt-5 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Filter</button>
                </form>
            </div>

            <div className="overflow-x-scroll shadow-md sm:rounded-xl my-8">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">
                                NO
                            </th>
                            <th scope="col" className="px-4 py-3">
                                TITLE
                            </th>
                            <th scope="col" className="px-4 py-3">
                                DESCRIPTION
                            </th>
                            <th scope="col" className="px-4 py-3">
                                QUALIFICATION
                            </th>
                            <th scope="col" className="px-4 py-3">
                                TYPE
                            </th>
                            <th scope="col" className="px-4 py-3">
                                TENURE
                            </th>
                            <th scope="col" className="px-4 py-3">
                                STATUS
                            </th>
                            <th scope="col" className="px-4 py-3">
                                COMPANY NAME
                            </th>
                            <th scope="col" className="px-4 py-3">
                                IMAGE
                            </th>
                            <th scope="col" className="px-4 py-3">
                                CITY
                            </th>
                            <th scope="col" className="px-4 py-3">
                                MIN SALARY
                            </th>
                            <th scope="col" className="px-4 py-3">
                                MAX SALARY
                            </th>
                            <th scope="col" className="px-4 py-3">
                                ACTION
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { data !== null && data.map((res, index) => {
                            return (
                                <tr key={res.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <td className="px-4 py-4">
                                        {index+1}
                                    </td>
                                    <th scope="row" className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                        {res.title}
                                    </th>
                                    <td className="px-4 py-4">
                                        {truncateString(res.job_description,20)}
                                    </td>
                                    <td className="px-4 py-4">
                                        {truncateString(res.job_qualification,20)}
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.job_type}
                                    </td>
                                    <td className="px-4 py-4">
                                    {res.job_tenure}
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.job_status}
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.company_name}
                                    </td>
                                    <td className="px-4 py-4">
                                        <img src={res.company_image_url} alt={res.company_name} className="w-full"></img>
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.company_city}
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.salary_min}
                                    </td>
                                    <td className="px-4 py-4">
                                        {res.salary_max}
                                    </td>
                                    <td className="flex items-center px-4 py-4 space-x-3">                  
                                        <div>
                                            <Button onClick={handleEdit} value={res.id} color="warning" size="xs">
                                                Edit
                                            </Button> 
                                        </div>
                                        <div>
                                            <Button onClick={handleDelete} value={res.id} color="failure" size="xs">
                                                Delete
                                            </Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default ListJob