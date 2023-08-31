import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Project1 from '../../imges/todoApp.png'
import Project2 from '../../imges/watherApp.png'
import Project3 from '../../imges/emajonapp.png'
import Project4 from '../../imges/user.png'
import "swiper/css"
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper';




const Project = () => {
    return (
        <section id='project' className='py-10 text-white'>

            <div className='text-center'>

                <h3 className="text-4xl font-semibold">
                    My <span className='text-cyan-500 cursor-pointer'>Projects</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>My awesome works</p>
            </div>
            <br />
            <div className='flex max-w-6xl px-5 mx-auto items-center relative justify-center'>
                <div className='lg:w-2/3 w-full '>
                    <Swiper
                        modules={[Pagination, Autoplay, Navigation]}
                        slidesPerView={1.2}
                        spaceBetween={20}
                        breakpoints={{ 768: { slidesPerView: 2 } }}
                        autoplay={{ delay: 2000 }}
                        loop={true}
                        pagination={{ clickable: true }}

                    >
                        <SwiperSlide>
                            <div className='h-fit w-full p-4 bg-slate-700 rounded-xl '>
                                <img src={Project1} alt="" className='rounded-lg' />
                                <h3 className='text-xl my-4'>Todo App</h3>
                                <div className='flex gap-3'>
                                    <a href="https://github.com/tntanvir/My-ToDo-App" target='_blank' className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2' rel="noreferrer">
                                        GitHub
                                    </a>
                                    <a href="https://todo-by-tanvir.netlify.app/" target='_blank' className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2' rel="noreferrer">
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
                                    <a href="https://github.com/tntanvir/Weather-App" rel="noreferrer" target='_blank' className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="https://weather-app-by-tanvir.netlify.app/" target='_blank' rel="noreferrer" className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
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
                                    <a href="https://github.com/tntanvir/Ema_John-App" target='_blank' rel="noreferrer" className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="https://ema-jone-by-tanvir.netlify.app/" target='_blank' rel="noreferrer" className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
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
                                    <a href="https://github.com/tntanvir/user_blog" target='_blank' rel="noreferrer" className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
                                        GitHub
                                    </a>
                                    <a href="https://social-blog-by-tanvir.netlify.app/" target='_blank' rel="noreferrer" className='text-cyan-500 cursor-pointer bg-gray-900 rounded-md py-2 px-2'>
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