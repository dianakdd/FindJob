import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
        <section class="bg-white dark:bg-gray-900 my-11">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                    <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                    <Link to="/" class="inline-flex text-white bg-black focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</Link>
                </div>   
            </div>
        </section>
    </>
  )
}

export default Page404