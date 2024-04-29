'use client'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Logo from "../../components/Logo";
import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";

type AppLink = {
    name: string;
    link: string;
}

const menuItems: AppLink[] = [
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

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false)
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("p-[1rem]");
        } else {
            setNavStyle("")
        }
    })
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }
    
    return (
        <header className={`absolute w-full z-[999] ${navStyle}`}>
            {/* desktop version */}
            <div className="w-full m-auto">
            <div className="px-6 py-4 text-base flex items-center justify-between font-[500]">
                {/* left side */}
                <div className="cursor-pointer">
                    <span>HET Sarl</span>
                </div>

                {/* right side */}
                <div className="flex items-center justify-center gap-10 text-sm">
                    <div className="flex items-center justify-center gap-10">
                            <span>What we do</span>
                            <span>Who we invest in</span>
                            <span>Testimonials</span>
                    </div>
                    <div className="bg-primary px-5 py-4 rounded-full text-secondary">
                        Get Funded
                    </div>
                </div>
            </div>
        </div>

        {/* mobile version */}
        <div className="nm-container">
            {/* logo */}
            <span>COTEK TECH</span>

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
            // style={{transform: mobileMenuOpened && "translateX(0%)"}}
            >
                <span>What we do</span>
                <span>How it works</span>
                <span>Who we invest in</span>
                <span>Testimonials</span>
                <div className="m-funded-button">
                    Get Funded
                </div>
            </div>

        </div>
            {/* desktop version */}
            {/* <nav className="flex items-center justify-between p-6 lg:px-48" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5 flex items-center">
                        <Logo />
                        <span className="italic font-bold mx-2">HET SARL</span>
                    </Link>
                </div>
                <div className="lg:hidden">
                    <button type="button" onClick={toggleMenu} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {
                        menuItems.map( item => (
                            <Link 
                                key={item.link} href={item.link} className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {item.name}
                            </Link>
                        ))
                    }
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button>
                        <Link href="#" className="text-sm font-semibold leading-6">Nous Contacter<span aria-hidden="true">&rarr;</span></Link>
                    </Button>
                </div>
            </nav>
            <div className={openMenu ? "flex lg:hidden" : "hidden"} role="dialog" aria-modal="true">
                <div className="fixed inset-0 z-50"></div>
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5 flex items-center">
                            <Logo />
                            <span className="italic font-bold">HET SARL</span>
                        </Link>
                    <button type="button" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Close menu</span>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    </div>
                    <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                        {
                            menuItems.map((m, i) => (
                                <Link key={i} href={m.link} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">{m.name}</Link>
                            ))
                        }
                        </div>
                        <div className="py-6">
                            <Button>
                                <Link href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7">Nous Contacter</Link>
                            </Button>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div> */}
        </header>
    )
}