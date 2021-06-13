import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';



const Art = () => {
    const [artData, setArt] = useState(null);

    useEffect(() =>{
        sanityClient
            .fetch(`*[_type == "art"]{
                title,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                completedAt
            }`).then((data) => setArt(data))
            .catch(console.error)
    }, [])

    return ( 
    <main className='bg-green-100 min-h-screen p-12'>
        <section className='container mx-auto'>
            <h1 className='text-5xl flex justify-center cursive'>Art Page</h1>
            <h2 className='text-lg text-gray-600 flex justify-center mb-12'>Welcome to the art page, full of paintings and post its</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {artData && artData.map((art, index) => (
                <article>
                    <span className='block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400' key={index}>
                        <img src={ art.mainImage.asset.url} alt={ art.mainImage.alt }
                        className='w-full h-full rounded-r object-cover absolute'/>
                        <span className='block relative h-full flex justify-end items-end pr-4 pb-4'>
                            <h3 className='text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded'>{art.title}</h3>
                        </span>
                    </span>
                </article>
                ))}
            </div>
        </section>
    </main> 
    );
}
 
export default Art;