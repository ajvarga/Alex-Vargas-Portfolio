import React from 'react';
import Image from '../8jQKh.jpg';
import ImageCont from '../backgroundCont.jpg'
import About from './About.js';
import Info from './AboutMe.js'
import Rowlet from '../rowlet.png'


const Home = () => {
    return ( 
    <main>
        <img src={ Image } alt='Birds in the Sky' className='absolute object-cover w-full h-full'/>
        
        <section className='relative flex justify-center min-h-screen pt-24 lg:pt-50 px-8'>
            {/* <h2 className='text-md text-green-50 font-bold cursive leading-non lg:leading-snug home-name'>Welcome!</h2> */}
            
            <About />
        </section>
        <section style={{ backgroundImage: `url(${ImageCont})` }}>
            {/* <img src={ ImageCont } alt='Birds in the Sky' className='absolute object-cover w-full md:h-full'/> */}
            <Info />

            <div className='mt-28'>
                <h2 className='absolute text-black text-2xl p-12 ml-12 bg-white rounded polaroid w-2/12 text-center'>Thank you again for coming by !!</h2>

                <div class="w-16 mt-36 ml-12 overflow-hidden inline-block">
                    <div class=" h-14 w-14 bg-white rounded -rotate-45 transform origin-top-left"></div>
                </div>

                <img src={ Rowlet } className='mt-30'/>
            </div>
        </section>
        
    </main>
       
     );
}
 
export default Home;