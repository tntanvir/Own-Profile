import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1 from '../../imges/todoApp.png'
import Project2 from '../../imges/watherApp.png'
import Project3 from '../../imges/emajonapp.png'
import Project4 from '../../imges/user.png'
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay, Navigation } from 'swiper';

const Project = () => {
    return (
        <section id='project' className='py-10 text-white'>

            <div className='text-center'>

                <h3 className="text-4xl font-semibold">
                    My <span className='text-cyan-500'>Projects</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
            </div>
            <br />
            <div className='flex max-w-6xl px-6 mx-auto items-center relative justify-center'>
                <div className='lg:w-3/4 w-full'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        slidesPerView={2}
                        navigation
                        autoplay={{ delay: 2000 }}
                        pagination={{ clickable: true }}

                    >
                        <SwiperSlide>
                            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl '>
                                <img src={Project1} alt="" className='rounded-lg' />
                                <h3 className='text-xl my-4'>Todo App</h3>
                                <div className='flex gap-3'>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        live Demo
                                    </a>
                                </div>


                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                                <img src={Project2} alt="" className='rounded-lg' />
                                <h3 className='text-xl my-4'>Wather App</h3>
                                <div className='flex gap-3'>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        live Demo
                                    </a>
                                </div>


                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                                <img src={Project3} alt="" className='rounded-lg' />
                                <h3 className='text-xl my-4'>Ema-John</h3>
                                <div className='flex gap-3'>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        live Demo
                                    </a>
                                </div>


                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl'>
                                <img src={Project4} alt="" className='rounded-lg' />
                                <h3 className='text-xl my-4'>Blog App</h3>
                                <div className='flex gap-3'>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="/" className='text-cyan-500 bg-gray-900 rounded-md py-2 px-2'>
                                        live Demo
                                    </a>
                                </div>


                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </section>
    );
};

export default Project;