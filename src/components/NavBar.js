import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons'

const NavBar = () => {
    return ( 
        <header className="bg-green-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to='/' exact 
                            activeClassName='text-white'
                            className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-red-800 text-4xl font-bold cursive tracking-widest">
                        Vargas
                    </NavLink>
                    {/* might delete this page */}
                    <NavLink to='/post'
                            activeClassName='text-white'
                            className="inflex-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800">
                        Blog Posts
                    </NavLink>
                    <NavLink to='/project'
                            activeClassName='text-white'
                            className="inflex-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800">
                        Projects
                    </NavLink>
                    <NavLink to='/art'
                            activeClassName='text-white'
                            className="inflex-flex items-center py-3 px-3 my-6 text-red-200 hover:text-red-800">
                        Art
                    </NavLink>
                </nav>
                <div className='inflex-flex py3 px3 my-6'>
                    <SocialIcon url='https://twitter.com/owl_eggs' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width:35 }}/>
                    <SocialIcon url='https://linkedin.com/in/ajvarga' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width:35 }}/>
                    <SocialIcon url='https://github.com/ajvarga' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width:35 }}/>
                    <SocialIcon url='https://twitch.tv/owl_eggs' className='mr-4' target='_blank' fgColor='#fff' style={{ height: 35, width:35 }}/>
                </div>
            </div>
        </header>
     );
}
 
export default NavBar;