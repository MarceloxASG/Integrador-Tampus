import habi from '../img/habi.jpg'
import React from 'react'

const Inicio00 = () => {
  return (
    <div className='max-w-[1640px] mx-auto px-[4%] py-4 mb-[-45px] mt-2'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>El <span className='text-[#00df9a]'>Mejor</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'> <span className='text-[#00df9a]'>Lugar</span> Para Ti</h1>
            </div>
            <img className='w-full max-h-[500px] object-cover' src={habi} alt="/" />
        </div>
    </div>
  )
}

export default Inicio00