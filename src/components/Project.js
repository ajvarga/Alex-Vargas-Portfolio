import React, { useState, useEffect } from 'react';
// import project from '../studio/schemas/project.js';
import sanityClient from '../client.js'

const Project = () => {
    const [projectData, setData] = useState(null)
    useEffect(() =>{
        // querry sanity, where any data of the type post we will return title, slug and image and set it in state
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                date,
                technologies,
                designImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                description,
                projectType,
                link,
                tags
                
            }`).then((data) => setData(data))
            .catch(console.error)
    }, [])
    return ( 
        <main className='bg-green-100 min-h-screen p-12'>
            <section className='container mx-auto'>
                <h1 className='text-5xl flex justify-center cursive'>My Projects</h1>
                <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome To My Many Projects, Have a Look Around</h2>
                <section className='grid grid-cols-2 gap-8'>
                    {projectData && projectData.map((project, index) => (
                    <article className='relative rounded-lg shadow-xl bg-white p-16'>
                        <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-red-700'>
                            
                            <a
                            href={project.link}
                            alt={project.title}
                            target='_blank'
                            rel='noopener noreferrer'>{project.title}</a>
                        </h3>
                        <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <p></p>
                            <span></span>
                        </div>
                        
                    </article>
                    ))}
                </section>
            </section>
        </main>
     );
}
 
export default Project;