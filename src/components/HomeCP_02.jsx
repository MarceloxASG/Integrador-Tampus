import React from 'react'
import comodo from '../img/comodo.jpg'

const HomeCP_02 = () => {
  return (
    <div className='w-full bg-black py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={comodo} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>EXPLORA, ADMIRA Y ELIGE</p>
                <h1 className='text-white md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Comodidad y seguridad a la distancia perfecta</h1>
                <p className='text-white'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat distinctio ea quia repellendus dolorem eaque eius beatae itaque esse tempora, sit tenetur in. Sequi modi iusto vero. Libero, tempore ea.
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-black'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default HomeCP_02