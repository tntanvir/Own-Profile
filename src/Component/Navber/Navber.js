import React, { useState } from 'react';
import { AiOutlineMenuFold } from 'react-icons/ai'

const Navber = () => {
    const [open, setOpen] = useState(false);
    const menuLink = [
        { name: 'HOME', link: "#home" },
        { name: 'ABOUT', link: "#about" },
        { name: 'SKILLS', link: "#skills" },
        { name: 'PROJECT', link: "#project" },
        { name: 'CONTACT', link: "#contact" },
    ]
    return (
        <nav className='fixed w-full left-0 top-0 z-[999]'>
            <div className='flex items-center justify-between'>
                <div className='mx-7'>
                    <h1 className='text-4xl uppercase font-bold'>

                        T<span className='text-cyan-600'>anvi</span>R
                    </h1>
                </div>
                <div className='text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full'>
                    <ul className='flex items-center gap-1 py-2 text-lg'>
                        {
                            menuLink.map((menu, i) =>
                            (
                                <li key={i} className='px-6 hover:text-cyan-600'>
                                    <a href={menu.link}>{menu.name}</a>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className={`z-[999] text-3xl md:hidden m-5 ${open ? "text-gray-900" : 'text-gray-100'}`}>
                    <AiOutlineMenuFold></AiOutlineMenuFold>
                </div>
                <div className={`md:hidden text-gray-900 absolute w2/3 h-screen px-7 py-2 bg-white top-0 duration-300 ${open ? "right-0" : 'right-[-100%]'} rounded-tl-full`}>
                    <ul className='flex flex-col justify-center h-full gap-10 py-2 text-lg '>
                        {
                            menuLink.map((menu, i) =>
                            (
                                <li key={i} onClick={() => setOpen(!open)} className='px-6 hover:text-cyan-600' >
                                    <a href={menu.link}>{menu.name}</a>
                                </li>
                            )
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;