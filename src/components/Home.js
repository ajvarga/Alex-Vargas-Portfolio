import React from 'react';
import Image from '../8jQKh.jpg';

const Home = () => {
    return ( 
    <main>
        <img src={ Image } alt='Birds in the Sky' className='absolute object-cover w-full h-full'/>
        <section className='relative flex justify-center min-h-screen pt-16 lg:pt-64 px-8'>
            <h2 className='text-md text-green-50 font-bold cursive leading-non lg:leading-snug home-name'>Hi, I'm Alex.</h2>
        </section>
    </main>    );
}
 
export default Home;