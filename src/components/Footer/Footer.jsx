import React from 'react'
import './Footer.css'
import EmailBox from '../EmailBox/EmailBox'
import { menuItems } from '../Navbar/Navbar'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="container">
            <div className="f-container">
                <span className="title">
                    Hearing Electronic Tools SARL 
                </span>
                <EmailBox />

                <hr className='bg-white'/>
                <div className="f-menu">
                {
                    menuItems.map( item => (
                        <span key={item.link}>
                            <Link href={item.link} className="text-sm font-semibold leading-6">
                                {item.name}
                            </Link>
                        </span>
                    ))
                }
                    {/* <span>who we invest</span>
                    <span>testimonials</span> */}
                </div>
                <hr />

                <span className='text-white'>
                © 2024 HTE Sarl, All rights reserved.
                </span>
            </div>
        </div>
    </div>
  )
}

export default Footer