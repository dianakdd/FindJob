import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'

const CreateJob = () => {
    let {idData} = useParams()
    const {state, handleFunction} = useContext(GlobalContext)
    const {input, setInput} = state
    const {handleInput, handleSubmit} = handleFunction 

    useEffect(() => {
        if(idData !== undefined){
            axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
          .then((res) => {
            let data = res.data
    
            setInput(
              {
                title: data.title,
                job_description: data.job_description,
                job_qualification: data.job_qualification,
                job_type: data.job_type,
                job_tenure: data.job_tenure,
                job_status: data.job_status,
                company_name: data.company_name,
                company_image_url: data.company_image_url,
                company_city: data.company_city,
                salary_min: data.salary_min,
                salary_max: data.salary_max,
              }
            )
          })
        }
    }, [idData, setInput])

    return (
    <>
        <h1 className="text-4xl font-semibold text-gray-800 dark:text-white">
            Create & Edit Job
        </h1>
        <h2 className="text-gray-400 text-md">
            Add new jobs to post!
        </h2>
        <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-xl shadow-md sm:p-5 md:p-8 my-10 dark:bg-gray-800 dark:border-gray-700 mx-auto p-10">
            <form onSubmit={handleSubmit} className="container max-w-2xl mx-auto">
                <div className="mb-3">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                    <input onChange={handleInput} value={input.title} name="title" type="text" id="title" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="job_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <input onChange={handleInput} value={input.job_description} name="job_description" type="text" id="job_description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="job_qualification" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qualification</label>
                    <input onChange={handleInput} value={input.job_qualification} name="job_qualification" type="text" id="job_qualification" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="job_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <input onChange={handleInput} value={input.job_type} name="job_type" type="text" id="job_type" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="job_tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tenure</label>
                    <input onChange={handleInput} value={input.job_tenure} name="job_tenure" type="text" id="job_tenure" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="job_status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                    <input onChange={handleInput} value={input.job_status} name="job_status" type="number" id="job_status" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
                    <input onChange={handleInput} value={input.company_name} name="company_name" type="text" id="company_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_image_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                    <input onChange={handleInput} value={input.company_image_url} name="company_image_url" type="text" id="company_image_url" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="company_city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                    <input onChange={handleInput} value={input.company_city} name="company_city" type="text" id="company_city" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary_min" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Min Salary</label>
                    <input onChange={handleInput} value={input.salary_min} name="salary_min" type="number" id="salary_min" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="salary_max" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Max Salary</label>
                    <input onChange={handleInput} value={input.salary_max} name="salary_max" type="number" id="salary_max" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-gray-200 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-gray-200 dark:shadow-sm-light" required />
                </div>
                <button type="submit" className="text-white text-white bg-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
            </form>
        </div>
    </>
  )
}

export default CreateJob