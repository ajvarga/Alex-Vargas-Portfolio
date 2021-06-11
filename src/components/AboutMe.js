import React from 'react'

export default function AboutMe() {
    return (
        <div>
        <section>
        <img src={ Image } alt='Birds in the Sky' className='absolute object-cover w-full h-96'/>
            <div className='grid pr-3 pl-3 md:grid-cols-1 lg:grid-cols-3 gap-8'>
                <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-4 bg-green-700'>
                            {/* <div> */}
                            <div className='w-full h-full'>
                                <h2 className='text-gray-900 text-xl px-3 py-3 bg-red-400 text-red-100 bg-opacity-75'> <b>Front End</b></h2>
                                
                                    <div className='px-12 py-4'>
                                        <h4 className='mr-12  py-3 text-lg text-white'> <b>Web Frameworks</b></h4>
                                        <li className='ml-12 text-white'>React.js</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-lg text-white'><b>Mobile</b></h4>
                                        <li className='ml-12 text-white'>Android</li>
                                    </div>
                                </div>
                            {/* </div> */}
                        </span>
                </span>
                <span className='block h-70 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-4 bg-green-700'>
                            {/* <div> */}
                            <div className='w-full h-full'>
                                <h2 className='text-gray-900 text-xl px-3 py-3 bg-red-400 text-red-100 bg-opacity-75'> <b>Languages</b></h2>
                                
                                    <div className='px-12 py-4'>
                                        <h4 className='mr-12  py-3 text-lg text-white'><b>Scripting Languages</b></h4>
                                        <li className='ml-12 text-white'>Python</li>
                                        <li className='ml-12 text-white'>Ruby</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-lg text-white'><b>Web</b></h4>
                                        <li className='ml-12 text-white'>Javascript, HTML, CSS</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-lg text-white'><b>Databases</b></h4>
                                        <li className='ml-12 text-white'>MySql, PostgreSQL</li>
                                    </div>
                             </div>
                            {/* </div> */}
                        </span>
                </span>
                <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400'>
                        <span className='block relative h-full flex pb-4 bg-green-700'>
                            {/* <div> */}
                            <div className='w-full h-full'>
                                <h2 className='text-gray-900 text-xl px-3 py-3 bg-red-400 text-red-100 bg-opacity-75'> <b>Back End</b></h2>
                                
                                    <div className='px-12 py-4'>
                                        <h4 className='mr-12  py-3 text-lg text-white'><b>Server Frameworks</b></h4>
                                        <li className='ml-12 text-white'>Node.js</li>
                                    </div>
                                    <div className='px-12'>
                                        <h4 className='mr-12 py-3 text-lg text-white'><b>Cloud Hosting</b></h4>
                                        <li className='ml-12 text-white'>Google Firebase</li>
                                    </div>
                                </div>
                            {/* </div> */}
                        </span>
                </span>
            </div>
        </section>
        </div>
    )
}
