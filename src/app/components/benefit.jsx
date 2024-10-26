"use client";
import Person from '../../assets/benefitsIcon/Person.png';
import Monitor from '../../assets/benefitsIcon/MonitorPlay.png';
import Certificate from '../../assets/benefitsIcon/Certificate.png';
import Lock from '../../assets/benefitsIcon/LockKeyOpen.png';
import Image from 'next/image';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const Benefit = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    const benefits = [
        {
            img: Person,
            title: "Expert Instructor",
            description: "Empower yourself with the knowledge and skills gained..."
        },
        {
            img: Monitor,
            title: "Interactive Learning",
            description: "Empower yourself with the knowledge and skills gained..."
        },
        {
            img: Lock,
            title: "Lifetime Access",
            description: "Empower yourself with the knowledge and skills gained..."
        },
        {
            img: Certificate,
            title: "Verified Certificate",
            description: "Empower yourself with the knowledge and skills gained..."
        }
    ];

    return (
        <section id="Benefit">
            <div className="py-[80px]">
                <div className="flex flex-col justify-center items-center">
                    <div className="flex items-center gap-[24px]">
                        <div className="border-2 border-[#f5ba20] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">Why choose us</h1>
                    </div>
                    <h1 className="text-[32px] text-[#1A2434] font-semibold max-sm:text-[25px] ">Best Learning Experience</h1>
                </div>

                <div 
                    data-aos="fade-up" 
                    className="grid grid-cols-4 gap-[32px] px-[80px] mt-[24px]  max-xl:grid-cols-2 max-sm:grid-cols-1 max-sm:p-[10px]"
                >
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md p-[24px] flex flex-col items-start">
                            <Image src={benefit.img} alt={benefit.title} className='text-left mb-4' />
                            <h1 className='text-[24px] text-[#1A2434] font-bold text-left'>{benefit.title}</h1>
                            <h1 className='mt-[12px] text-left text-[20px] text-[#1A2434]'>
                                {benefit.description}
                            </h1>
                            <a href='/#About' >
                            <h1 className='mt-[24px] text-left text-[20px] text-[#1A2434] flex items-center gap-[16px]'>
                                Learn more
                                <span className='flex items-center'>
                                    <FaArrowRightLong />
                                </span>
                            </h1>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Benefit;
