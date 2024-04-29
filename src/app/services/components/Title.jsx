"use client"
import './Title.css'
import React from 'react'

const Title = () => {

    const variants = (delay) => ({
        initial : {
            y: "18rem"
        },
        animate : {
            y: "0rem",
            transition: {
                type: "spring",
                damping: 25,
                duration: 2.5,
                delay
            }
        }
    })

    const imgVariants = () => ({
        initial : {
            y: "18rem"
        }, 
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            }
        }
    })

  return (
    <div className="h-wrapper flex justify-center items-center pt-36 pb-8 text-4xl font-bold text-white">
        Nos Services
    </div>
  )
}

export default Title