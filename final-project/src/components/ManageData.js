import React, { useState } from 'react'
import { Table, Button } from 'flowbite-react'
import { useEffect } from 'react'
import axios from 'axios'

const ManageData = () => {
    
    //materi fetch data
    const [data, setData] = useState(null)

    //indikator
    const [fetchStatus, setFetchStatus] = useState(true)

    //indikator
    const [currentId, setCurrentId] = useState(-1)

    useEffect(() => {
        //fetch data dengan kondisi
        if (fetchStatus === true) {
        axios.get("https://backendexample.sanbercloud.com/api/mobile-apps")
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

    const truncateString = (str, num) => {
        if (str != null && str.length > num) {
            return str.slice(0, num) + "...";
        } else {
            return str;
        }
    }

    const clamp = (value, min, max) => {
        return Math.min(Math.max(value, min), max);
    }

    //materi create data
    const [input, setInput] = useState(
        {
            name: "",
            description: "",
            category: "",
            release_year: 2007,
            size: 0,
            price: 0,
            rating: 0,
            image_url: "",
            is_android_app: "",
            is_ios_app: ""
        }
    )

    //handling input
    const handleInput = (event) => {
        let name = event.target.name
        let value = event.target.value

        setInput({ ...input, [name]: value }) 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        let {name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app} = input

        if (currentId === -1) {
            //create data
            axios.post('https://backendexample.sanbercloud.com/api/mobile-apps', {name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        } else {
            // update data
            axios.put(`https://backendexample.sanbercloud.com/api/mobile-apps/${currentId}`, {name, description, category, release_year, size, price, rating, image_url, is_android_app, is_ios_app})
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
                description: "",
                category: "",
                release_year: 2007,
                size: 0,
                price: 0,
                rating: 0,
                image_url: "",
                is_android_app: "",
                is_ios_app: ""
            }
        )
    }

    //handling delete
    const handleDelete = (event) => {
        let idData = parseInt(event.currentTarget.value)
    
        axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
        .then((res) => {
            console.log(res)
            setFetchStatus(true)
        })
        .catch((error) => {
            alert(error)
        })
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.currentTarget.value)
    
        axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${idData}`)
            .then((res) => {
            let data = res.data
            setCurrentId(idData)
    
            setInput(
                {
                    name: data.name,
                    description: data.description,
                    category: data.category,
                    release_year: data.release_year,
                    size: data.size,
                    price: data.price,
                    rating: data.rating,
                    image_url: data.image_url,
                    is_android_app: data.is_android_app,
                    is_ios_app: data.is_ios_app
                }
            )
            })
    }

    return (
        <>
        <div className="flex justify-center gap-2">
            <div className="m-20 mt-10 w-full">
                <h6 class="text-lg font-bold dark:text-white mb-8">Manage Data</h6>
                <Table>
                    <Table.Head children className="bg-purple-500">
                        <Table.HeadCell className="text-white bg-purple-500">
                            NO
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            NAMA
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            KATEGORI
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            DESCRIPTION
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            PRICE
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            RATING
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            RELEASE YEAR
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            SIZE
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            IS_ANDROID_APP
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            IS_IOS_APP
                        </Table.HeadCell>
                        <Table.HeadCell className="text-white bg-purple-500">
                            ACTION
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        { data !== null && data.map((res, index) => {
                            return (
                                <Table.Row key={res.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index+1}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.name}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.category}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {truncateString(res.description,10)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.price}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.rating}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.release_year}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.size}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.is_android_app}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {res.is_ios_app}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <div className="flex flex-wrap gap-2">
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
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
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
                <h6 class="text-lg font-bold dark:text-white mb-8">Create Data</h6>
                <form onSubmit={handleSubmit}>
                    <p>Gambar Data Game</p>
                    <hr/>
                    <br/>
                    <div className="mb-6">
                        <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                        <input onChange={handleInput} value={input.image_url} name="image_url" type="text" id="image_url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div> 
                    <p>Data Game</p>
                    <hr/>
                    <br/>
                    <div className="mb-6">
                        <label htmlFor="nama" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                        <input onChange={handleInput} value={input.name} name="name" type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="kategori" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                        <input onChange={handleInput} value={input.category} name="category" type="text" id="kategori" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    </div> 
                    <div className="mb-6">
                        <label htmlFor="deskripsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <input onChange={handleInput} value={input.description} name="description" type="text" id="deskripsi" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="harga" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                        <input onChange={handleInput} value={input.price} name="price" type="number" id="harga" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                        <input onChange={handleInput} value={clamp(input.rating, 0, 5)} name="rating" type="number" id="rating" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="released_year" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Release Year</label>
                        <input onChange={handleInput} value={clamp(input.release_year, 2007, 2021)} name="release_year" type="number" id="harga" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Size</label>
                        <input onChange={handleInput} value={input.size} name="size" type="number" id="size" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <p>Jenis Perangkat</p>
                    <hr/>
                    <br/>
                    <div className="mb-6">
                        <label htmlFor="is_android_app" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Android ?</label>
                        <input onChange={handleInput} value={input.is_android_app} name="is_android_app" type="number" id="is_android_app" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="is_ios_app" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">IOS ?</label>
                        <input onChange={handleInput} value={input.is_ios_app} name="is_ios_app" type="number" id="is_ios_app" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required/>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </div>
        </div>
        </> 
    )
}

export default ManageData