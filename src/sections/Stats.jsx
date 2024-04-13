import React from 'react';
import { statistics } from '../constants';

const Stats = () => {
  return (
    <section className='w-full justify-center items-center pl-[100px] max-container '>

      <div className='flex flex-1 flex-row items-center justify-center'>
        <div className=' absolute  z-[0] w-[60%] h-[60%] -right-[40%]  rounded-full purple__gradient   ' />
        {statistics.map((stat, index) => (
          <div
            className='pt-[100px] gap-3 flex flex-1 flex-row text-white items-center'
            key={index}>
            <p className=' font-Mont text-4xl font-bold' >{stat.value}</p>
            <p className=' uppercase '>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
