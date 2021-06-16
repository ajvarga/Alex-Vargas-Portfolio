import React, { useEffect, useState } from 'react';
import sanityClient from '../client.js'
import background from '../Eky1aT4XYAYUeFO.png';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import arrow from '../arrow.png'

const builder = imageUrlBuilder(sanityClient);
function urlFor(source){
    return builder.image(source)
}

const About = () => {
    const [author, setAuthor] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
            name,
            bio,
            "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error)
    }, [])

    if(!author) return <div>Fetching...</div>

    return ( 
    <main className='relative'>
        {/* <img src={ background } alt='Ghibli background' className='absolute w-full'/> */}
        <div className='p-8 lg:pt-30 container mx-auto relative'>
            <section className='bg-green-700 rounded-lg shadow-2xl lg:flex p-20'>
                <img src={ urlFor(author.authorImage).url()} className='rounded w-32 h-32 lg:w-52 lg:h-52 mr-8' alt={ author.name }/>
                <div className='text-lg flex flex-col justify-center'>
                    <h1 className='cursive text-6xl text-green-300 mb-4'>
                        Hi, I'm{' '}
                        <span className='text-green-100'>{ author.name }</span>
                    </h1>
                    <div className='prose lg:prose-l text-white'>
                        <BlockContent blocks={ author.bio } projectId='buoyug0l' dataset='production'/>
                    </div>
                </div>
            </section>
            <div className='flex justify-center lg:mt-32 md:mt-8'>
                <img src={ arrow } className='absolute w-20 h-20 animate-bounce'/>
            </div>
        </div>
    </main>
    );
}
 
export default About;