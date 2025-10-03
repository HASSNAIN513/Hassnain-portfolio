import React, { useRef, useState } from 'react'
import Revealonscroll from '../Revealonscroll'
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [form, setform] = useState({name:"",email:"",message:""})
    const ref = useRef(null)
    
    const handleSubmit=(e) => { 
e.preventDefault()
emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLATE_ID,ref.current,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
    alert("Message Sent!")
    setform({name:"",email:"",message:""})
}).catch((result)=>{
    alert("Oops! Something went wrong. Please try again.")
    console.log(result);
    
})



    }
  return (
    <section id="contact" className='min-h-screen  flex items-center justify-center py-20'>
        <Revealonscroll>
     <div className='px-4 md:w-150 w-screen'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-center text-transparent '>Get in Touch</h2>
        <form ref={ref} onSubmit={handleSubmit} className='space-y-6'>
            <div className='relative'>
            <input type="text" 
            name="name" 
            id="name" 
            value={form.name}
            onChange={(e)=>{
                setform({...form,name:e.target.value})
            }}
            required 
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='Name...'
            />
            </div>
            <div className='relative'>
            <input type="email" 
            name="email" 
            id="email" 
            value={form.email}
            onChange={(e)=>{
                setform({...form,email:e.target.value})
            }}
            required 
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='example@gmail.com'
            />
            </div>
            <div className='relative'>
            <textarea  
            name="message" 
            id="message" 
            required
            value={form.message}
            onChange={(e)=>{
                setform({...form,message:e.target.value})
            }} 
            rows={7}
            className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5'
            placeholder='Your Message...'
            />
            </div>
            <button type='submit'  className='w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]'>Send Message</button>
        </form>
    </div>






        </Revealonscroll>
      
    </section>
  )
}

export default Contact
