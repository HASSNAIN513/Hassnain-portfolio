import React from 'react'
import Revealonscroll from '../Revealonscroll'

const Home = () => {
  return (
    <section id='home' className='h-screen px-1   flex flex-col justify-center items-center gap-5 relative'>
      <Revealonscroll>
      <div className='text-5xl md:text-7xl  font-bold bg-gradient-to-r from-blue-500 text-transparent bg-clip-text to-cyan-400 '>Hi, I'm HASSNAIN</div>

      <div>
        <p className='text-gray-400 text-center text-lg max-w-lg mx-uto'>I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both excepyional performance and a delighthful user experience.</p>
      </div>

      <div className=' flex justify-center gap-x-4 mt-5'>
        <a className='bg-blue-500 text-white py-3 px-6  rounded font-medium transition overflow-hidden hover:-translate-y-2' href="#project">View Projects</a>
        <a className='border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,245,0.4)] hover:-translate-y-2' href="#contact">Contact Us</a>
      </div>
      </Revealonscroll>
    </section>
  )
}

export default Home
