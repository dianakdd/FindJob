import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { useEffect } from 'react'
import axios from 'axios'

const Tugas10 = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
      axios.get("https://backendexample.sanbercloud.com/api/student-scores")
        .then((res) => {
          setData([...res.data])
        })
        .catch((error) => {
            console.groupCollapsed(error)
            alert(error)
        })
    }, [])
  
    // console.log(data)

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

    return (
        <div className="flex justify-center gap-2 ">
            <div className="m-20 mt-10 w-full">
                <Table>
                    <Table.Head children className="bg-purple-600">
                        <Table.HeadCell className="text-white">
                            NO
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white">
                            NAMA
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white">
                            MATA KULIAH
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white">
                            NILAI
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white">
                            INDEX NILAI
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        
                        { data !== null && data.map((res, index) => {
                            return (
                                <>
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
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
                                    </Table.Row>
                                </>
                            )
                        })}
                        
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}

export default Tugas10
