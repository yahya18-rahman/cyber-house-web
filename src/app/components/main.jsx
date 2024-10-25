"use client"
import { useState, useEffect } from 'react';
import Member from '../../assets/students.png'
import Partner from '../../assets/partner.png'
import Image from 'next/image';
import Ibnu from '../../assets/mentor/Ellipse 1139.png'
import efraim from '../../assets/mentor/efraim.png'
import Fikri from '../../assets/mentor/fikri.png'
import AOS from 'aos'

const main = () => {
    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 100,
            easing: "ease-out-cubic",
        });
    }, []);

    const mentors = [
        {
            "name": "Ibnu Faisal",
            "position": "Cyber Seccurity Expert",
            "image": Ibnu,
            "description": "Cyber Security Expert Head of infoSec at byOrange, Certified in Cyber Security by ISC2"
        },
        {
            "name": "Efraim Julian",
            "image": efraim,
            "position": "Cyber Seccurity Expert",
            "description": "Senior IT Governance and Security Management Informedia Nusantara, Certified CISA, Certified CEH, Certified LA27001"
        },
        {
            "name": "Fikri Mobilu",
            "image": Fikri,
            "position": "Cyber Security Expert",
            "description": "IT Project Supervisior, IT Security &amp; DevOps, Technical Support Network Administrator, Network Operation Centre PT.Industri Telekomunikasi (Persero), PT.CyberNetwork Indonesia and PT.Internet Madju Abadi Abad Melindo"
        }
    ]
    const [isHovered, setHovered] = useState(false)
    return (
        <section className="bg-[#F9FCFF]" draggable="false">
            <div className="flex justify-between py-[40px] px-[80px] grid-cols-2">
                <div>
                    <h1 className="text-[60px] font-bold" >Master Digital Skills <br /> with Ease!</h1>
                    <p className="py-[20px] text-[20px] text-[#1A2434]">Unlock Digital Mastery Effortlessly! Explore and enhance your <br /> skills with our user-friendly platform.</p>
                    <div className="flex gap-[40px] mt-[20px]">
                        <div className="border-2 border-[#f5ba20] h-[96px] rounded-full"></div>
                        <div>
                            <h1 className="text-[20px] text-[#1A2434] font-bold" >Total Student</h1>
                            <Image alt="member" src={Member} className='ml-[-1rem]' />
                        </div>
                    </div>
                    <div className='grid-cols-2 mt-[40px] flex gap-[16px] group' >
                        <div className={`transition-all duration-700 ease-in-out ${isHovered ? 'border-2 text-black bg-transparent border-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center' : `bg-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center text-white hover:scale-105 hover:shadow-2xl`}`}>
                            <h1 className=' font-bold text-[24px]' >Start Learning</h1>
                        </div>
                        <div className={`transition-all duration-700 ease-in-out ${isHovered ? `bg-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center text-white hover:scale-105 hover:shadow-2xl` : `border-2 text-black bg-transparent border-[#f5ba20] rounded-[16px] w-[304px] h-[77px] flex items-center justify-center`}`}
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            <h1 className=' font-bold text-[24px]' >Learn More</h1>
                        </div>
                    </div>
                    <div className='mt-[40px]'>
                        <h1 className='text-[20px] text-[#1A2434] font-bold'>Trusted by</h1>
                        <Image alt='partner' src={Partner} className='mt-[8px]' />
                    </div>
                </div>

                <div>
                    <div data-aos="fade-left" className='flex'>
                        <div className='absolute bg-white w-[296px] h-[480px] rounded-[16px] mt-[16px]' >
                            <p className='text-[20px] font-bold text-[#1A2434] pl-[32px] pt-[16px] w-full' >Our Mentor</p>
                            {
                                mentors.map(mentor => (
                                    <div className='pl-[32px] pt-[16px]'>
                                    <div className='flex'>
                                      <Image alt='ibnu' src={mentor.image} widths={42} className='h-auto max-h-[42px] object-cover'  />
                                       <div className='px-[8px]'>
                                        <h1 className='font-bold text-[16px]' >{mentor.name}</h1>
                                        <p className='text-[14px] text-[#575455] font-bold' >{mentor.position}</p>
                                        <p className='text-[12px] text-[#575455] font-thin' >{mentor.description}</p>
                                       </div>
                                    </div>
                                </div>
                                ))
                            }
                        </div>
                        <div className='border-2 ml-[219px] border-[#f5ba20] w-[405px] h-[666px] bg-[#f5ba20] rounded-[24px]' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default main;