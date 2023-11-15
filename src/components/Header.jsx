import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Header = () => {

    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
    
    return(
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-black'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>TAMPUS</h1>
            <ul className='hidden md:flex'>
                <li className='p-4'><Link to='/'>Home</Link></li>
                <li className='p-4'><Link to='/Navegar'>Navegar</Link></li>
                <li className='p-4'>Page2</li>
                <li className='p-4'>Page3</li>
                <li className='p-4'>Page4</li>
            </ul>

            <div onClick={handleNav} className='block md:hidden'>
                {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-200 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>TAMPUS</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-400'><Link to='/'>Home</Link></li>
                    <li className='p-4 border-b border-gray-400'><Link to='/Navegar'>Navegar</Link></li>
                    <li className='p-4 border-b border-gray-400'>Page2</li>
                    <li className='p-4 border-b border-gray-400'>Page3</li>
                    <li className='p-4'>Page4</li>
                </ul>
            </div>

            <div className='relative inline-block'>
                <img
                    src="https://tecdn.b-cdn.net/img/new/avatars/2.jpg"
                    className="rounded-full cursor-pointer"
                    style={{ height: '50px', width: '50px', marginLeft: '20px', marginRight:'50px'}}
                    alt=""
                    loading="lazy"
                    onClick={toggleMenu}  
                />

                {showMenu && (
                    <div className='absolute bg-white p-4 shadow-md left-[-60px] z-10'>
                        <ul>
                        <li className='p-2 border-b border-gray-400'><Link to=''>Perfil</Link></li>
                        <li className='p-2 border-b border-gray-400'><Link to=''>Ajustes</Link></li>
                        <li className='p-2 border-b border-gray-400'><Link to='/Login'>Login</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Header;