import React from 'react'

const ComponentsPage = async() => {
    await new Promise<void>((resolve) => setTimeout(() => resolve(),2000))
  return (
    <div>
        <h1 className='text-lg'>Hello</h1>
    </div>
  )
}

export default ComponentsPage