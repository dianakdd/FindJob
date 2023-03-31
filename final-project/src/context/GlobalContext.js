import React, { createContext, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Cookies from 'js-cookie'

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    let navigate = useNavigate()
    
    //materi fetch data
    const [data, setData] = useState(null)

    //materi create data
    const [input, setInput] = useState(
        {
            title: "",
            job_description: "",
            job_qualification: "",
            job_type: "",
            job_tenure: "",
            job_status: "",
            company_name: "",
            company_image_url: "",
            company_city: "",
            salary_min: "",
            salary_max: "",
        }
    )

    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    //indikator
    const [currentId, setCurrentId] = useState(-1)

    let state = {
        data,
        setData,
        input, 
        setInput,
        fetchStatus,
        setFetchStatus,
        currentId,
        setCurrentId
    }

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value }) 
    }

    //handling submit
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        let {
            title, 
            job_description, 
            job_qualification, 
            job_type,
            job_tenure, 
            job_status, 
            company_name, 
            company_image_url, 
            company_city, 
            salary_min, 
            salary_max
        } = input

        if (currentId === -1) {
            //create data
            axios.post('https://dev-example.sanbercloud.com/api/job-vacancy', 
            {
                title, 
                job_description, 
                job_qualification, 
                job_type,
                job_tenure, 
                job_status, 
                company_name, 
                company_image_url, 
                company_city, 
                salary_min, 
                salary_max
            },
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
                navigate('/dashboard/list-job')
            })
        } else {
            // update data
            axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`, 
            {
                title, 
                job_description, 
                job_qualification, 
                job_type,
                job_tenure, 
                job_status, 
                company_name, 
                company_image_url, 
                company_city, 
                salary_min, 
                salary_max
            },
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
                navigate('/dashboard/list-job')
            })
        }
    
        //balikin indikator ke -1
        setCurrentId(-1)

        //clear input setelah create data
        setInput(
            {
                title: "",
                job_description: "",
                job_qualification: "",
                job_type: "",
                job_tenure: "",
                job_status: "",
                company_name: "",
                company_image_url: "",
                company_city: "",
                salary_min: "",
                salary_max: "",
            }
        )
    }

    //handling delete
    const handleDelete = (event) => {
        let idData = parseInt(event.currentTarget.value)
    
        axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`,
            {headers: {"Authorization" : "Bearer "+ Cookies.get('token')}})
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })
        .catch((error) => {
            alert(error)
        })
    }

    //handling edit
    const handleEdit = (event) => {
        let idData = parseInt(event.currentTarget.value)
    
        setCurrentId(idData)
        navigate(`dashboard/list-job/edit/${idData}`)
    }

    const truncateString = (str, num) => {
        if (str != null && str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    const formatRupiah = (angka, prefix) => {
        var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split   		= number_string.split(','),
        sisa     		= split[0].length % 3,
        rupiah     		= split[0].substr(0, sisa),
        ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

        // tambahkan titik jika yang di input sudah menjadi angka ribuan
        if(ribuan){
            let separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.');
        }

        rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
        return prefix === undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
    }


    let handleFunction = {
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        truncateString,
        formatRupiah
    }

    return(
        <GlobalContext.Provider value={
            {state, handleFunction}
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}