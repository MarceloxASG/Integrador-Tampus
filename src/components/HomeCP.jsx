import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-router-dom';

const HomeCP = () => {
  return (
    <div className='text-black'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>PROYECTO TAMPUS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>¡Ya no sigas buscando!</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                    Contamos con
                </p>
                <Typed 
                    className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                    strings={['Apartamentos', 'Cuartos', 'Terrazas','Penthouse']} 
                    typeSpeed={50} 
                    backSpeed={50} 
                    loop
                />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-600'>blablablablabla blablablablabla blablablablabla</p>
            <Link to='/Navegar'><button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button></Link>
        </div>
    </div>
  )
}


export default HomeCP;
