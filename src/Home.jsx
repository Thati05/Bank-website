import React from 'react'
import {
  Hero,
  Service,
  Stats,
  Features,
  Logos,
  Testimonals,
  CalltoAction,
  GetStarted,
  Footer
} from './sections'


const Home = () => {
  return (
    <main className=' relative bg-black w-full overflow-hidden'>


      <section className='pl-[100px]'>
        <Hero />
      </section>
      <section>
        <Stats />
      </section>
      <section>
        <Features />

      </section>
      <section>
        <CalltoAction />

      </section>
      <section>
        <Service />
      </section>
      <section>
        <Testimonals />
      </section>
      <section>
        <Logos />
      </section>
      <section>
        <GetStarted />
      </section>
      <section>
        <Footer />
      </section>

    </main>

  )
}

export default Home