'use client'
import { useState } from "react";
import Link from "next/link";
import Logo from "./components/Logo";
import { Button } from "@/components/ui/button";

type AppLink = {
    name: string;
    link: string;
}

export default function Template({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const [openMenu, setOpenMenu] = useState(false)
    
    const toggleMenu = () => {
        setOpenMenu(!openMenu)
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

    return (
        <div className="bg-white relative">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-48" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link href="#" className="-m-1.5 p-1.5 flex items-center">
                            <Logo />
                            <span className="italic font-bold">HET SARL</span>
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
                </div>
            </header>
            {children}
            <footer className="flex flex-col bg-slate-900 text-white py-10 gap-8 justify-center items-center">
                <div>
                    <Logo />
                </div>
                <div>
                © 2024 HTE Sarl, All rights reserved.
                </div>
            </footer>
        </div>
    );
  }