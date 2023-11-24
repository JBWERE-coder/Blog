import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2 text-3xl'>ReadsBySuki Blog</p>
      <h1 className='font-bold text-xl'>Grow & Learn </h1>
      <div className='flex justify-center'>
        <p className='font-bold'>Read all topics from </p>
        <Typed 
        className='font-bold pl-2'
        strings={['Love', 'Sex','Money', 'Relationships','Parenting']} 
        typeSpeed={120} 
        backSpeed={120}
        loop
        />
      </div>
      <p className='italic  font-bold'>Enjoy every line you read...</p>
      </div>
    </div>
  )
}

export default Hero