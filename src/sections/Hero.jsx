import React from 'react'
import Button from '../components/Button'
import { HeaderImage } from '../assets'

const Hero = () => {
  return (
    <section id="home"
      className='w-full flex xl:flex-row max-container gap-40  flex-col min-h-screen items-center justify-center max-xl:p-0 '
    >
      <div
        className=' relative xl:w-2/5 flex flex-col justify-center items-start mt-44 w-full max-xl:paddig-x max-xl:pt-30 '
      >
        <h1 className=' capitalize text-white text-4xl font-Mont font-bold pb-10'>
          The Bank where your finances take flight
        </h1>
        <p className=' text-white font-light text-[18px] leading-normal pb-5 '>
          Dodo Bank is your trusted financial institution, committed to delivering excellence in banking services.
          We prioritize your convenience and security,
          offering seamless transactions and personalized solutions.
        </p>
        <Button label="Get Started" />

      </div>
      <div className='pt-[100px] flex-1 relative flex max-xl:hidden  '>
        <img src={HeaderImage}
          className='w-[700px] h-[650px] object-contain max-h-[800px]  '
        />
      </div>


    </section>
  )
}

export default Hero
