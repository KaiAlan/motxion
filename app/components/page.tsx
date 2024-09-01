import React from 'react'

const ComponentsPage = async() => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(),2000))
  return (
    <div className='w-full'>
        <h1 className='text-lg'>Hello</h1>
        <div className='w-full h-40 bg-card-4'></div>
    </div>
  )
}

export default ComponentsPage