import React from 'react'


const HeroSection = () => {
  return (
    <section>
  <div className="mx-auto flex flex-col md:flex-row bg-heroGradient p-10">

    <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2 h-full md:pt-12 pl-4 md:pl-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#f7f260] ">Controlling your diet has never been so easy</h1>
      <p className="mt-8 text-base sm:text-xl md:text-2xl text-brown">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ex alias explicabo blanditiis quia molestias.
        Quo earum ab aperiam, placeat accusantium ratione blanditi.
      </p>
      <div className="mt-10 flex ">
        <button className="btn-custom">Check balanced meal plans</button>
      </div>
    </div>

    <div className="md:w-1/2 h-full flex justify-center items-center">
    <img
        src="picture_hero.png"
        alt="img"
        className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-[30rem]"
      />
    </div>
  </div>
</section>



  )
}

export default HeroSection
