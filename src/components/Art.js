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
                    <span className='block h-80 relative rounded shadow border-l-8 border-r-8 border-t-8 border-white' key={index}>
                        <img src={ art.mainImage.asset.url} alt={ art.mainImage.alt }
                        className='w-full h-full mb-28 rounded-r object-cover absolute'/>
                        
                        <div className='absolute w-full h-full  flex justify-center items-end'>
                            <h2 className='text-black w-full text-center text-xl font-blog px-3 py-4 bg-white polaroid'>{art.title}</h2>
                        </div>
                    </span>
                    
                </article>
                ))}
            </div>
        </section>
    </main> 
    );
}
 
export default Art;