import React from 'react'
import { Logo } from '../assets'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <section className=' max-container pt-[200px] pb-[50px] w-full'>
      <div className=' items-center justify-center flex flex-1 flex-row gap-[150px] padding-x  pb-8 border-gray-500 flex-wrap border-b border-solid'>
        <div className='flex  flex-col items-start'>
          <img
            width={100}
            height={100}
            src={Logo} />
          <p className=' font-open_sans font-light text-white w-[312px]'>A new way to make the payments easy, reliable and secure.</p>
        </div>
        <div className=' flex flex-1 flex-row gap-[100px]'>
          {footerLinks.map((section) => (
            <div

              key={section}>
              <h4 className=' text-white mb-5 font-bold font-open_sans'>{section.title}</h4>
              <ul >
                {section.links.map((link) => (
                  <li className='  text-gray-300 font-open_sans mb-3 font-light'>
                    <a>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div>

      </div>
    </section>
  )
}

export default Footer
