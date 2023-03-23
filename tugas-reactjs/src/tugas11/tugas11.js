import React, { useState } from 'react'
import { Table, Button } from 'flowbite-react'
import { useEffect } from 'react'
import axios from 'axios'

const Tugas11 = () => {
    //materi fetch data
    const [data, setData] = useState(null)

    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    //indikator
    const [currentId, setCurrentId] = useState(-1)

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
        axios.get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData([...res.data])
            })
            .catch((error) => {
                console.groupCollapsed(error)
                alert(error)
            })
        setFetchStatus(false)
        }
    }, [fetchStatus, setFetchStatus])

    const handleIndexScore = (nilai) => {
        if(nilai >= 80){
            return "A"
        }else if(nilai >= 70 && nilai < 80){
            return "B"
        }else if(nilai >= 60 && nilai < 70){
            return "C"
        }else if(nilai >= 50 && nilai < 60){
            return "D"
        }else if(nilai < 50){
            return "E"
        }else{
            return "not defined"
        }
    }

    //materi create data
    const [input, setInput] = useState(
        {
            name: "",
            course: "",
            score: 0,
        }
    )

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

        let {name, course, score} = input

        if (currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/student-scores', {name, course, score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        } else {
            // update data
            axios.put(`https://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
    
        }
    
        //balikin indikator ke -1
        setCurrentId(-1)

        //clear input setelah create data
        setInput(
            {
                name: "",
                course: "",
                score: 0,
            }
        )
    }

    //handling delete
    const handleDelete = (event) => {
        let idData = parseInt(event.currentTarget.value)
    
        axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
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
    
        axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`)
          .then((res) => {
            let data = res.data
            setCurrentId(idData)
    
            setInput(
              {
                name: data.name,
                course: data.course,
                score: data.score
              }
            )
          })
    }

    return (
        <>
        <div className="flex justify-center gap-2">
            <div className="m-20 mt-10 w-full">
                <Table>
                    <Table.Head children className="bg-purple-500">
                        <Table.HeadCell className="text-white bg-purple-500">
                            NO
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            NAMA
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            MATA KULIAH
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            NILAI
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            INDEX NILAI
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            ACTION
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { data !== null && data.map((res, index) => {
                            return (
                                <>
                                    <Table.Row key={res.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                            {index+1}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.name}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.course}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {res.score}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {handleIndexScore(res.score)}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <div className="flex flex-wrap gap-2">
                                                <div>
                                                    <Button onClick={handleEdit} value={res.id} color="warning">
                                                        Edit
                                                    </Button>
                                                </div>
                                                <div>
                                                    <Button onClick={handleDelete} value={res.id} color="failure">
                                                        Delete
                                                    </Button>
                                                </div>
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                </>
                            )
                        })}

                        {
                            data === null && (
                                <>
                                    {data !== null ? <tr></tr> : <tr>
                                        <td><p>Tidak ada data</p></td>
                                    </tr> }
                                </>
                            )
                        }
                    </Table.Body>
                </Table>
            </div>
        </div>

        <div className="flex justify-center">
            <div className="m-20 mt-0 w-full">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                    <input onChange={handleInput} value={input.name} name="name" type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nama" required />
                </div> 
                <div className="mb-6">
                    <label htmlFor="matkul" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mata Kuliah</label>
                    <input onChange={handleInput} value={input.course}  name="course" type="text" id="matkul" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mata kuliah" required />
                </div> 
                <div className="mb-6">
                    <label htmlFor="nilai" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nilai</label>
                    <input onChange={handleInput} value={input.score}  name="score" type="number" id="nilai" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div> 
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            </div>
        </div>
        </> 
    )
}

export default Tugas11
