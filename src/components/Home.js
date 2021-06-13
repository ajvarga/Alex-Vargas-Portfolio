import React from 'react';
import Image from '../8jQKh.jpg';
import ImageCont from '../backgroundCont.jpg'
import About from './About.js';
import Info from './AboutMe.js'
import reactImg from '../react.png'
import arrow from '../arrow.png'

const Home = () => {
    return ( 
    <main>
        <img src={ Image } alt='Birds in the Sky' className='absolute object-cover w-full h-full'/>
        
        <section className='relative flex justify-center min-h-screen pt-24 lg:pt-50 px-8'>
            {/* <h2 className='text-md text-green-50 font-bold cursive leading-non lg:leading-snug home-name'>Welcome!</h2> */}
            <About />
        </section>
        <Info />
        
        
    </main>   
     );
}
 
export default Home;