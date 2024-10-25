"use client"
import Person from '../../assets/benefitsIcon/Person.png'
import Monitor from '../../assets/benefitsIcon/MonitorPlay.png'
import Certificate from '../../assets/benefitsIcon/Certificate.png'
import Lock from '../../assets/benefitsIcon/LockKeyOpen.png'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


const benefit = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const benefits = [
        {
            "img": Person,
            "title": "Expert Instructor",
            "description": "Empower yourself with the knowledge and skills gained..."
        },
        {
            "img": Monitor,
            "title": "Interactive Learning",
            "description": "Empower yourself with the knowledge and skills gained..."
        },
        {
            "img": Lock,
            "title": "Lifetime Access",
            "description": "Empower yourself with the knowledge and skills gained..."
        },
        {
            "img": Certificate,
            "title": "Verified Certificate",
            "description": "Empower yourself with the knowledge and skills gained..."
        }
    ]
    return (
        <section>
            <div className="py-[80px]">

                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-[24px]">
                        <div className="border-2 border-[#f5ba20] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">Why choose us</h1>
                    </div>
                    <h1 className="text-[32px] text-[#1A2434] font-semibold" >Best Learning Experience</h1>
                </div>


                <div data-aos="fade-up" className="md:flex gap-x-0 grid grid-cols-1 gap-y-[10px] md:gap-y-0 md:gap-x-[32px] justify-center md:justify-between mt-[80px] px-[80px] gap-[32px]" >
                    {
                        benefits.map((benefit, index) => (
                            <div key={index} >
                                <div className='p-[24px]' >
                                    <Image src={benefit.img} className='text-left ' />
                                </div>
                                <div className='px-[24px]' >
                                    <h1 className='text-[24px] text-[#1A2434] font-bold'>{benefit.title}</h1>
                                    <h1 className='mt-[24px] text-left text-[20px] text-[#1A2434] ' >Empower yourself with <br /> the knowledge and skills <br /> gained...</h1>
                                    <h1 className='mt-[24px] text-left text-[20px] text-[#1A2434] flex items-center gap-[16px]'>
                                        Learn more
                                        <span className='flex items-center'>
                                            <FaArrowRightLong />
                                        </span>
                                    </h1>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </section>
    )
}

export default benefit