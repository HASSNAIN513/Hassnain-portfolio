import React from 'react'
import Revealonscroll from '../Revealonscroll';

const Project = () => {
  return (
    <section id='project' className='min-h-screen flex items-center justify-center py-20'>
        <Revealonscroll>

        
      
      <div className='max-w-5xl mx-auto px-4'>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent ">Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)'>
                <h3 className='text-xl font-bold mb-2'> URL-Shortner</h3>
                <p className='text-gray-400 mb-4'>Built a URL shortener with custom link generation, database storage, and a responsive interface.</p>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {["Node.js","Next.js","TailwindCSS","MongoDB"].map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
                </div>

                <div className='flex justify-between items-center'>
                <a className='text-blue-400 hover:text-blue-300 transition-colors my-4' href=""> View Project →</a>
                </div>
            </div>
             <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)'>
                <h3 className='text-xl font-bold mb-2'>Password Manager</h3>
                <p className='text-gray-400 mb-4'>Developed a secure password manager with encryption, user authentication, and cloud storage.</p>
                <div  className='flex flex-wrap gap-2 mb-4'>
                    {["Node.js","React","TailwindCSS","MongoDB","Express.js"].map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
                </div>

                <div className='flex justify-between items-center'>
                <a className='text-blue-400 hover:text-blue-300 transition-colors my-4' href=""> View Project →</a>
                </div>
            </div>
             <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)'>
                <h3 className='text-xl font-bold mb-2'>Todo App</h3>
                <p className='text-gray-400 mb-4'>Developed a to-do app with task creation, editing, and deletion features, offering a clean and responsive interface.</p>
                <div  className='flex flex-wrap gap-2 mb-4'>
                    {["Node.js","React","TailwindCSS","MongoDB","Express.js"].map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
                </div>

                <div className='flex justify-between items-center'>
                <a className='text-blue-400 hover:text-blue-300 transition-colors my-4' href=""> View Project →</a>
                </div>
            </div>
             <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)'>
                <h3 className='text-xl font-bold mb-2'>Linktree</h3>
                <p className='text-gray-400 mb-4'>Created a Linktree-style app to manage and share multiple links with a customizable, responsive interface.</p>
                <div  className='flex flex-wrap gap-2 mb-4'>
                    {["Next.js","TailwindCSS","MongoDB"].map((item, index) => {
                  return (
                    <span
                      key={index}
                      className="bg-blue/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all cursor-pointer"
                    >
                      {item}
                    </span>
                  );
                })}
                </div>

                <div className='flex justify-between items-center'>
                <a className='text-blue-400 hover:text-blue-300 transition-colors my-4' href=""> View Project →</a>
                </div>
            </div>
        </div>
      </div>
      </Revealonscroll>
    </section>
  )
}

export default Project
