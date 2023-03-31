import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { GlobalContext } from '../context/GlobalContext'
import { useParams } from 'react-router-dom'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const DetailJob = () => {

  let {idData} = useParams()
  const [dataJob, setDataJob] = useState(null)
  const {handleFunction} = useContext(GlobalContext)
  let {formatRupiah} = handleFunction

  useEffect(() => {
    if(idData !== undefined){
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
      .then((res) => {
        // console.log(res.data)
        setDataJob(res.data)
      })
    }
  }, [idData])

  
  return (
    <>
    <section className="dark:bg-gradient-to-tr dark:from-gray-900 dark:to-slate-800 min-h-screen relative pb-12">
      <div className="py-4 px-6 sm:py-5 sm:px-20 md:px-44 dark:text-gray-100 min-h-fi">
        <div className="pt-12 flex flex-col md:flex-row justify-center items-start gap-10">
          <div className="w-full md:4/12 lg:w-3/12">
            <img className="w-96" src={dataJob?.company_image_url} alt={dataJob?.company_name} />
          </div>
          <div className="w-full md:8/12 lg:w-9/12 shadow-2xl py-10 px-10 dark:bg-slate-800 rounded-xl">
            <div className="mb-2">
              <p className="text-3xl font-medium">{dataJob?.title} ({dataJob?.job_type})</p>
            </div>
            <div className="mb-2 flex items-center gap-x-10">
              <p className="text-2xl font-medium ">{dataJob?.company_name} - {dataJob?.job_tenure}</p>
            </div>
            <div className="mb-2 flex items-center gap-x-10">
              <div className="flex">
                <svg className="h-6 w-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className="text-md font-light ml-2">{dataJob?.company_city}</p>
              </div>
              <div className="text-md font-light">{moment(dataJob?.created_at, "YYYYMMDD h:mm:ss").fromNow()}</div>
            </div>
            <div className="mb-4 border-b pb-2">
              {dataJob?.job_status === 0 ? 
              <span className="text-red-600 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-2">
                <path d="M3.707 2.293a1 1 0 00-1.414 1.414l6.921 6.922c.05.062.105.118.168.167l6.91 6.911a1 1 0 001.415-1.414l-.675-.675a9.001 9.001 0 00-.668-11.982A1 1 0 1014.95 5.05a7.002 7.002 0 01.657 9.143l-1.435-1.435a5.002 5.002 0 00-.636-6.294A1 1 0 0012.12 7.88c.924.923 1.12 2.3.587 3.415l-1.992-1.992a.922.922 0 00-.018-.018l-6.99-6.991zM3.238 8.187a1 1 0 00-1.933-.516c-.8 3-.025 6.336 2.331 8.693a1 1 0 001.414-1.415 6.997 6.997 0 01-1.812-6.762zM7.4 11.5a1 1 0 10-1.73 1c.214.371.48.72.795 1.035a1 1 0 001.414-1.414c-.191-.191-.35-.4-.478-.622z" /></svg>Close
              </span>
              : 
              <span className="text-green-600 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 mr-3"><path fillRule="evenodd" d="M5.05 3.636a1 1 0 010 1.414 7 7 0 000 9.9 1 1 0 11-1.414 1.414 9 9 0 010-12.728 1 1 0 011.414 0zm9.9 0a1 1 0 011.414 0 9 9 0 010 12.728 1 1 0 11-1.414-1.414 7 7 0 000-9.9 1 1 0 010-1.414zM7.879 6.464a1 1 0 010 1.414 3 3 0 000 4.243 1 1 0 11-1.415 1.414 5 5 0 010-7.07 1 1 0 011.415 0zm4.242 0a1 1 0 011.415 0 5 5 0 010 7.072 1 1 0 01-1.415-1.415 3 3 0 000-4.242 1 1 0 010-1.415zM10 9a1 1 0 011 1v.01a1 1 0 11-2 0V10a1 1 0 011-1z" clipRule="evenodd" /></svg>Open
              </span>
              }
            </div>
            <div className="mb-4 border-b pb-2">
              <h5 className="text-lg">Description</h5>
              <p className="font-light text-md">{dataJob?.job_description}</p>
            </div>
            <div className="mb-4 border-b pb-2">
              <h5 className="text-lg">Qualification</h5>
              <p className="font-light text-md">{dataJob?.job_qualification}</p>
            </div>
            <div className="mb-4">
              <h5 className="text-lg">Salary</h5>
              <span className="text-md">Rp {formatRupiah(dataJob?.salary_min + "")} - Rp {formatRupiah(dataJob?.salary_max + "")}</span>
            </div>
            <Link to="/job-vacancy" className="flex items-center justify-center text-sm sm:text-md text-white rounded-md bg-black py-1 px-3 w-fit">Kembali</Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default DetailJob