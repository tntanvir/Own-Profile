import React from 'react';
import CV from '../../imges/IMG_0408_032931 (1).jpg'
const About = () => {
    const intro = [
        { text: "Years Experience", count: "02" },
        { text: "Compleite Project", count: "24" },
        { text: "Job Experience", count: "00" },
    ]
    return (
        <section id='about' className='py-10 text-white'>
            <div className='text-center  mt-8'>
                <h3 className='text-4xl font-semibold'>
                    About <span className='text-cyan-500'>Me</span>
                </h3>
                <p className='text-gray-500 my-3 text-lg'>My introduction</p>
                <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto mt-9'>
                    <div className='p-2'>
                        <div className='text-gray-300 my-3 '>

                            <p className='md:text-justify leading-7 text-justify'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia iusto dolor placeat tempore explicabo ratione atque doloribus ea nostrum enim sed, quidem exercitationem consequuntur labore officiis sequi totam cupiditate numquam?
                            </p>

                            <div className='flex mt-10 items-center gap-7'>
                                {
                                    intro?.map(intr => (
                                        <div key={intr.count}>
                                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                                                {intr.count}<span className='text-cyan-500'>+</span>
                                            </h3>
                                            <span className='md:text-base text-sm' >{intr.text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <a href={CV} download>

                                <button className='btn-primary md:mx-0 mt-8'>Download Cv</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex-1 flex justify-center items-center'>
                        <div className='lg:w-80 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                            <img src={CV} alt="" className='rounded-xl' />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default About;