import React from 'react'
// import Sidebar from '../components/Sidebar'
import Sidebar from '../components/Sidebar'

const LayoutDashboard = (props) => {
  return (
    <>
        <main className="relative h-screen overflow-hidden bg-gray-100 dark:bg-gray-800 ">
            <div className="flex items-start justify-between">
                <Sidebar />
                <div class="flex flex-col w-full md:space-y-4  p-4 sm:ml-64 sm:overflow-x-hidden">
                    <div class="h-screen overflow-x-hidden p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14 pb-14 sm:overflow-x-hidden">
                        {props.children}
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default LayoutDashboard