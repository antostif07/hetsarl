"use client"

import React, { useState } from 'react'
import './Navbar.css'
import {BiMenuAltRight} from 'react-icons/bi'
import {RxCross2} from 'react-icons/rx'
import {useMotionValueEvent, useScroll} from 'framer-motion';
import Logo from '../Logo'
import Link from 'next/link'

export const menuItems = [
    {
        name: "Accueil",
        link: "/"
    },
    {
        name: "A Propos",
        link: "/about-us"
    },
    {
        name: "Services",
        link: "/services"
    },
  ];

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("")
        }
    })

  return (
    <div className={`n-wrapper ${navStyle}`}>
        {/* desktop version */}
        <div className="container">
            <div className="n-container">
                {/* left side */}
                <div className="n-logo h-24 flex justify-center items-center">
                    <Logo />
                    <span className='font-bold flex px-2'>HET SARL</span>
                </div>

                {/* right side */}
                <div className="n-right">
                    <div className="n-menu">
                        {
                            menuItems.map( item => (
                                <Link
                                    key={item.link} href={item.link} className="text-sm font-semibold leading-6"
                                >
                                    {item.name}
                                </Link>
                            ))
                        }
                        {/* <Link to="wwd-wrapper" spy={true} smooth={true} >
                            <span>What we do</span>
                        </Link>
                        <Link to="hiw-wrapper" spy smooth offset={100} >
                            <span>How it works</span>
                        </Link>
                        <Link to="wwi-wrapper" spy smooth >
                            <span>Who we invest in</span>
                        </Link>
                        <Link to="t-wrapper" spy smooth offset={100} >
                            <span>Testimonials</span>
                        </Link> */}
                    </div>
                    <div className="fund-button">
                        Nous contacter
                    </div>
                </div>
            </div>
        </div>

        {/* mobile version */}
        <div className="nm-container">
            {/* logo */}
            <Logo />
            <span className='font-bold flex px-2'>HET SARL</span>

            {/* menu icon */}
            {
                !mobileMenuOpened ? 
                <BiMenuAltRight
                size={30}
                onClick={() => setMobileMenuOpened(true)} 
                /> : 
                <RxCross2 
                size={30}
                onClick={() => setMobileMenuOpened(false)}
                />
            }

            {/* mobile menu */}
            <div className="nm-menu"
            style={{transform: mobileMenuOpened && "translateX(0%)"}}
            >
                {
                    menuItems.map( item => (
                        <Link
                            key={item.link} href={item.link} className="text-sm font-semibold leading-6"
                        >
                            {item.name}
                        </Link>
                    ))
                }
                <div className="m-funded-button">
                    Nous Contacter
                </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar