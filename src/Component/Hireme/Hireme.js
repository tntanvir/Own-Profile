import React from 'react';
import hero from '../../imges/IMG_20230829_145805.jpg'

const Hireme = () => {
    return (
        <section id='hireme' className="py-10 px-3 text-white">

            <div className='text-center'>

                <h3 className="text-4xl font-semibold">
                    Hire <span className='text-cyan-500'>Me</span>
                </h3>
                <p className='text-gray-400 mt-3 text-lg'>Do you have any work?</p>
            </div>
            <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
                <div>
                    <h2 className='text-2xl font-semibold'>Do you want any work from me?</h2>
                    <p className='max-w-lg text-sm mt-4 text-gray-200 text-justify leading-6'>In the ever-evolving world of technology, I'm committed to staying up-to-date. I regularly seek new tools and techniques to enhance my skills and deliver innovative solutions.</p>
                    <button className='btn-primary md:mx-0 mt-2'>Hire Me</button>
                </div>
                <img src={hero} alt="" className='lg:h-[20rem] h-72 lg:absolute  -right-3 object-cover rounded-full lg:mr-5' />
            </div>
        </section>
    );
};

export default Hireme;