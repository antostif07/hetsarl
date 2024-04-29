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
                <div className='flex justify-between w-full text-white lg:flex-row flex-col gap-8 sm:gap-0'>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold'>Contact</span>
                        <a href="tel:+243900548492">+243 900 548 492</a>
                    </div>
                    <div className='flex flex-col text-white'>
                        <span className='font-bold'>Adresse</span>
                        <span>Référence En diagonale de l'hôtel memling <br />
Adresse : Avenue du Tchad/ numéro 5 /commune de la gombe</span>
                    </div>
                </div>
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