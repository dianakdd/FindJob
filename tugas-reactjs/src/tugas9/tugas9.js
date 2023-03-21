import React from "react"

function Tugas9 () {

    return(
        <div className="" style={{backgroundColor: 'white'}}>
            <div className='Content items-center object-center'>
                <div class="container max-w-3xl px-4 mx-auto sm:px-8">
                    <div class="py-8">
                        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                            <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
                                <table class="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                No
                                            </th>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                Nama
                                            </th>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                Mata Kuliah
                                            </th>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                                Nilai
                                            </th>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-center text-gray-800 uppercase bg-white border-b border-gray-200">
                                                Index Nilai
                                            </th>
                                            <th scope="col" class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="px-5 py-1 text-sm bg-white border-b border-gray-200" >
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    1
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    John
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Algoritma
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    80
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    A
                                                </p>
                                            </td>
                                            <td class="flex-row">
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class=" px-1  bg-white-600 hover:bg-gray-300 text-black transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class="px-1  bg-red-500 hover:bg-red-600 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        {/* row 2 */}
                                        <tr>
                                            <td class="px-5 py-1 text-sm bg-white border-b border-gray-200" >
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    2
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Doe
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Matematika
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    70
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    B
                                                </p>
                                            </td>
                                            <td class="flex-row">
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class=" px-1  bg-white-600 hover:bg-gray-300 text-black transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class="px-1  bg-red-500 hover:bg-red-600 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* row 3 */}
                                        <tr>
                                            <td class="px-5 py-1 text-sm bg-white border-b border-gray-200" >
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    3
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Frank
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Kalkulus
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    60
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    C
                                                </p>
                                            </td>
                                            <td class="flex-row">
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class=" px-1  bg-white-600 hover:bg-gray-300 text-black transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class="px-1  bg-red-500 hover:bg-red-600 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* row 4 */}
                                        <tr>
                                            <td class="px-5 py-1 text-sm bg-white border-b border-gray-200" >
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    4
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Jason
                                                </p>
                                            </td>
                                            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    Basis Data
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    90
                                                </p>
                                            </td>
                                            <td class="px-2 py-5 text-sm text-center bg-white border-b border-gray-200">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    A
                                                </p>
                                            </td>
                                            <td class="flex-row">
                                                <div className="flex flex-wrap gap-2 items-center">
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class=" px-1  bg-white-600 hover:bg-gray-300 text-black transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Edit
                                                        </button>
                                                    </div>
                                                    <div>
                                                        <button type="button" style={{paddingTop:'5px', paddingBlock: '2px'}} class="px-1  bg-red-500 hover:bg-red-600 text-white transition ease-in duration-200 text-center text-sm font-semibold shadow-md  rounded-lg ">
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  export default Tugas9;
