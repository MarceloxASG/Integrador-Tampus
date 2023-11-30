import React, {useState} from "react";
import { data } from "../data/data";

const Inicio02 = () => {
    //console.log(data)
    const [foods, setFoods] = useState(data)

    // Filtros elementos
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category  === category;
            })
        );
    };

    // Filtros precios
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        )
    }

    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl mt-[-20px] mb-[40px] text-center'>Propiedades disponibles</h1>

            {/*Filtros*/}
            <div className='flex flex-col lg:flex-row justify-between'>

                <div>
                    <p className='font-bold text-gray-700'> Tipos</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=> setFoods(data)} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>
                            All
                        </button>
                        <button onClick={()=> filterType('burger')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Apartamentos
                        </button>
                        <button onClick={()=> filterType('pizza')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Habitaciones
                        </button>
                        <button onClick={()=> filterType('salad')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Terrazas
                        </button>
                        <button onClick={()=> filterType('chicken')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>
                            Penthouse
                        </button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>Precios</p>
                    <div className="flex justify-between max-w-[390px] w-full">
                        <button onClick={()=> filterPrice('$')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={()=> filterPrice('$$')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={()=> filterPrice('$$$')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={()=> filterPrice('$$$$')} className='mr-3 my-3 shadow-sm px-2 py-1 bg-gray-100 border-orange-600 rounded-md text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>
            </div>


        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=> (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} 
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ) )}        
        </div>

        </div>
    );
};

export default Inicio02;