import React from 'react'

const Hero = () => {
  return (
   
      //<div className="relative min-h-screen pt-16 flex items-center bg-black text-white px-4 sm:px-8 md:px-12">
    <div className="relative min-h-[600px] flex items-center bg-black text-white px-4 sm:px-8 md:px-12">
  <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1663427929917-333d88949f7a?q=80&amp;w=1932&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Earth from space" className="w-full h-full object-cover object-center" />
      
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
    </div>

   
    <div className="relative z-10 max-w-2xl w-full text-center md:text-left md:ml-0 lg:ml-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">Build faster</span>
            <span className="text-white">with ready-to-use UI templates</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-300">
            Launch modern websites in minutes with beautifully crafted, fully responsive templates powered by Tailwind CSS and React. Perfect for developers and startups.
        </p>
        <button className="mt-6 px-5 py-3 text-sm sm:text-base rounded-md text-white font-semibold bg-gradient-to-r from-pink-500 to-orange-400 hover:from-orange-500 hover:to-pink-500 transition-all">
            Explore Templates
        </button>
    </div>
</div>

   
  )
}

export default Hero
