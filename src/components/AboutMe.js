import React from 'react'
import ImageCont from '../backgroundCont.jpg';
import reactImg from '../react.png';
import pythonLogo from '../pythonLogo.png';
import firebaseLogo from '../firebaseLogo.png'
import ucscLogo from '../UCSC-Logo.png';
import shortLogo from '../trophy.png';
import longLogo from '../clock.png';

export default function AboutMe() {
    return (
        <div>
            
        <section>

        <div className='flex justify-center'>
            <div className='bg-white w-8/12 md:w-5/12 h-14 absolute rounded-full opacity-60 '>
                <h1 className='text-black cursive text-4xl md:text-4xl text-center pt-3 md:pt-2 '>Dev Skills</h1>
            </div>
        </div>
            <div className='grid pt-20 pr-3 pl-3 md:grid-cols-1 lg:grid-cols-3 gap-8 '>
                <span className='block my-6 ml-5 w-11/12 h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-4  bg-gradient-to-r from-green-900 to-green-400' >
                            {/* <div> */}
                            <div className='w-full h-full absolute'  style={{ backgroundImage: `url(${reactImg})`, backgroundSize: '210px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                <h2 className='text-white text-2xl px-3 py-3 text-center bg-green-900 bg-opacity-75'> <b>Front End</b></h2>
                                <div className='block items-center' >
                                    <div className='pr-20'>
                                        <div className='px-12 py-3 md:py-6'>
                                            <h4 className='mr-12 py-3 text-xl text-white inline'> <b>Web Frameworks</b></h4>
                                            <li className='ml-12 text-lg text-white'>React.js</li>
                                        </div>
                                        <div className='px-12'>
                                            <h4 className='mr-12 py-2 text-xl text-white'><b>Mobile</b></h4>
                                            <li className='ml-12 text-lg text-white'>Android</li>
                                        </div>
                                    </div>
                                    {/* <div>
                                        <img src={ reactImg } className='ml-20 mt-16 h-9/12 w-9/12 opacity-60'/>
                                    </div> */}
                                </div>
                            </div>
                            {/* </div> */}
                        </span>
                </span>
                <span className='block w-11/12 h-70 ml-5 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-5 bg-gradient-to-r from-green-900 to-green-400'>
                            {/* <div> */}
                            <div className='w-full h-full'  style={{ backgroundImage: `url(${pythonLogo})`, backgroundSize: '230px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                <h2 className='text-white text-2xl px-3 py-3 text-center bg-green-900 bg-opacity-75'> <b>Languages</b></h2>
                                    <div className='px-12 py-4'>
                                        <h4 className='mr-12  py-3 text-xl text-white'><b>Scripting Languages</b></h4>
                                        <li className='ml-12 text-white text-lg'>Python, Ruby</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-xl text-white'><b>Web</b></h4>
                                        <li className='ml-12 text-white text-lg'>Javascript, HTML, CSS</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-xl text-white'><b>Databases</b></h4>
                                        <li className='ml-12 text-white text-lg'>MySql, PostgreSQL</li>
                                    </div>
                             </div>
                            {/* </div> */}
                        </span>
                </span>
                <span className='block w-11/12 h-64 ml-5 my-6 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-4 bg-gradient-to-r from-green-900 to-green-400'>
                            {/* <div> */}
                            <div className='w-full h-full absolute'  style={{ backgroundImage: `url(${firebaseLogo})`, backgroundSize: '190px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                <h2 className='text-white text-2xl px-3 py-3 text-center bg-green-900 bg-opacity-75'> <b>Back End</b></h2>
                                
                                    <div className='px-12 md:py-3'>
                                        <h4 className='mr-12  py-2 md:py-3 text-xl text-white'><b>Server Frameworks</b></h4>
                                        <li className=' ml-8 md:ml-12 text-white md:text-lg'>Node.js</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-2 md:py-3 text-xl text-white'><b>Cloud Hosting</b></h4>
                                        <li className='ml-8 md:ml-12 text-white text-lg'>Google Firebase, AWS</li>
                                    </div>
                                </div>
                            {/* </div> */}
                        </span>
                </span>
            </div>
        </section>

        
        <section>
        {/* <img src={ Image } alt='Birds in the Sky' className='absolute object-cover w-full h-96 md:h-full'/> */}

        <div className='flex justify-center mt-16'>
            <div className='bg-white w-7/12 lg:w-5/12 h-14 absolute rounded-full opacity-60'>
                <h1 className='text-black cursive text-4xl text-center pt-2'>Education</h1>
            </div>
        </div>
            <div className='flex justify-center mt-16 p-3 md:p-5'>
                <span className='block my-6 w-full relative rounded shadow leading-snug bg-white border-l-8 border-green-400 lg:w-1/3 md:w-2/3 '>
                        <span className='block relative h-full flex pb-4  bg-gradient-to-r from-green-900 to-green-400'>
                            <div className='w-full h-full'>
                                <h2 className='text-white text-2xl px-3 py-2 text-center  bg-green-900 bg-opacity-75'> <b>UC Santa Cruz</b></h2>
                                <h4 className='text-gray-300 text-md px-3 text-center bg-green-900 bg-opacity-75'> <b> September 2018 - June 2020</b></h4>
                                <div className='block items-center bg-opacity-80' style={{ backgroundImage: `url(${ucscLogo})`, backgroundSize: '275px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                    <div className='pr-20'>
                                        <div className='px-12 py-3'>
                                            <h4 className='mr-12 py-3 text-xl text-white inline'> <b>Major</b></h4>
                                            <li className='ml-12 text-lg text-white'>BA: Computer Science</li>
                                        </div>
                                    </div>
                                    <div>
                                    <div className='px-12 py-6'>
                                            <h4 className='mr-12 py-3 text-xl text-white inline'> <b>Noteworthy Courses</b></h4>
                                            <li className='ml-12 text-md text-white'>Intro to Software Engineering</li>
                                            <li className='ml-12 text-md text-white'>Android Development</li>
                                            <li className='ml-12 text-md text-white'>Database Systems</li>
                                            <li className='ml-12 text-md text-white'>Web Development</li>
                                            <li className='ml-12 text-md text-white'>User Experience</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </span>
                </span>
            </div>
        </section>
       
        <section>

        <div className='flex mt-4 justify-center'>
            <div className='bg-white w-5/12 h-14 absolute rounded-full opacity-60'>
                <h1 className='text-black cursive text-4xl text-center pt-2'>Goals</h1>
            </div>
        </div>
            <div className='flex justify-center'>
                <div className='grid w-auto lg:w-8/12 pt-20 p-2 md:pr-3 md:pl-3 md:grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 '>
                    <span className='block relative  rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                            <span className='block relative h-full flex pb-4  bg-gradient-to-r from-green-900 to-green-400 '>
                                {/* <div> */}
                                <div className='w-full h-full'  style={{ backgroundImage: `url(${shortLogo})`, backgroundSize: '245px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                    <h2 className='text-white text-2xl px-3 py-3 text-center bg-green-900 bg-opacity-75'> <b>Short Term</b></h2>
                                    <div className='block items-center'>
                                        <div className='md:pr-20 lg:mr-20 md:mr-8'>
                                            <div className='px-12 py-3'>
                                                <h4 className='mr-12 py-3 text-xl text-white inline'> <b>Career</b></h4>
                                                <li className='ml-12 text-lg text-white'>To land an entry/intern position and begin my developer career</li>
                                                <li className='ml-12 text-lg text-white'>Continue learning new technolgies</li>
                                                <li className='ml-12 text-lg text-white'>Complete and Deploy my projects</li>
                                            </div>
                                            <div className='px-12'>
                                                <h4 className='mr-12 py-3 text-xl text-white'><b>Personal</b></h4>
                                                <li className='ml-12 text-lg text-white'>Do 70 paintings and develop my artstyle</li>
                                                <li className='ml-12 text-lg text-white'>Find more ways to help my family after supporting me all this time</li>
                                                <li className='ml-12 text-lg text-white'>Support my fellow streamers in their endeavors</li>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <img src={ reactImg } className='ml-20 mt-16 h-9/12 w-9/12 opacity-60'/>
                                        </div> */}
                                    </div>
                                </div>
                                {/* </div> */}
                            </span>
                    </span>
                    <span className='block relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                            <span className='block relative h-full flex pb-5 bg-gradient-to-r from-green-900 to-green-400'>
                                {/* <div> */}
                                <div className='w-full h-full'  style={{ backgroundImage: `url(${longLogo})`, backgroundSize: '230px', backgroundRepeat: 'no-repeat', backgroundPosition:'bottom right'}}>
                                    <h2 className='text-white text-2xl px-3 py-3 text-center bg-green-900 bg-opacity-75'> <b>Long Term</b></h2>
                                    <div className=' m-auto p-auto md:pr-20 lg:mr-20 md:mr-8'>
                                        <div className='px-12 '>
                                            <h4 className='mr-12  py-3 text-xl text-white'><b>Career</b></h4>
                                            <li className='ml-12 text-white text-lg'>To have aquired a few years of professional experience</li>
                                            <li className='ml-12 text-white text-lg'>Form a start up that will help content creators</li>
                                            <li className='ml-12 text-white text-lg'>Be a mentor to a new developer</li>
                                        </div>
                                        <div className='px-12'>
                                            <h4 className='mr-12 py-3 text-xl text-white'><b>Personal</b></h4>
                                            <li className='ml-12 text-white text-lg'>Hone my artistic ability, and learn digital techniques</li>
                                            <li className='ml-12 text-white text-lg'>Help a content creator obtain success in their career</li>
                                            <li className='ml-12 text-white text-lg'>Continue to pursue happiness</li>
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </span>
                    </span>
                </div>
            </div>
        </section>
        </div>
    )
}
