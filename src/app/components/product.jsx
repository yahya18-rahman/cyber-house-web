"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Free from '../../assets/Product/Free.png';
import Paid from '../../assets/Product/paid.png';
import { CiClock1 } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = () => {
    const FreeClass = {
        img: Free,
        title: "Free Class",
        status: "Free",
        total_lesson: 3,
        Date: "September 2024",
        topic: [
            "Secure Your Code with SAST: Learn how to improve code security using Static Application Security Testing tools.",
            "Introduction to SOC Analyst: Explore the role and key responsibilities of a SOC Analyst in protecting organizational data.",
            "SIEM and Wazuh Essentials: Get into cybersecurity management with SIEM and Wazuh for threat detection and incident response."
        ],
        rate: 4.7
    };

    const PaidClass = {
        img: Paid,
        title: "Paid Class",
        total_lesson: 6,
        duration: "8 Weeks",
        price: "5.000.000",
        rate: 4.7
    };

    const MiniClass = {
        title: "Coming Soon",
    };

    const [currentClass, setCurrentClass] = useState(FreeClass);
    const [activeClass, setActiveClass] = useState('FreeClass');

    const handleClick = (classData, className) => {
        setCurrentClass(classData);
        setActiveClass(className);
    };

    return (
        <section id='Product' className="bg-[#F9FCFF] flex justify-center items-center p-[80px]">
            <div className="bg-[white] w-[1300px] max-w-[1300px] transition-all duration-300 p-[80px]">
                <div className="py-[50px]">
                    <div className="flex items-center justify-center gap-[24px]">
                        <div className="border-2 border-[#A4074D] w-[64px] rounded-full h-0"></div>
                        <h1 className="ml-2 text-[24px] text-[#1A2434]">Our Product</h1>
                    </div>
                    <h1 className="text-[36px] text-[#1a2434] font-semibold flex items-center justify-center">Product and Services</h1>
                </div>

                <center>
                    <div className="flex justify-between gap-[10px] items-center w-[754px] max-w-[754px] h-[77px] max-md:w-[350px] max-md:h-[50px] rounded-[40px] bg-[#F4F4F4] px-[8px] transition-all duration-300">
                        <div
                            className={`w-[150px] h-[50px] rounded-[40px] max-md:w-[100px] max-md:h-[30px] flex justify-center items-center transition-all duration-500 ${activeClass === 'FreeClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(FreeClass, 'FreeClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]">Free Class</h1>
                        </div>
                        <div
                            className={`w-[150px] h-[50px] max-md:w-[100px] max-md:h-[30px] rounded-[40px] flex justify-center items-center transition-all duration-500 ${activeClass === 'PaidClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(PaidClass, 'PaidClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]">Paid Class</h1>
                        </div>
                        <div
                            className={`w-[150px] h-[50px] max-md:w-[100px] max-md:h-[30px] rounded-[40px] flex justify-center items-center transition-all duration-500 ${activeClass === 'MiniClass' ? 'bg-white' : ''} cursor-pointer`}
                            onClick={() => handleClick(MiniClass, 'MiniClass')}
                        >
                            <h1 className="text-[24px] max-md:text-[15px] text-[#1A2434]">Mini Course</h1>
                        </div>
                    </div>

                    {activeClass !== 'MiniClass' ? (
                        <div className="mt-4 p-4 bg-white rounded-lg flex justify-center items-center transition-all duration-300">
                            <div className='w-[357.33px] max-w-[357.33px] flex flex-col'>
                                <Image alt="picture" src={currentClass.img || Free} className='rounded-t-[16px] transition-all duration-300' />
                                <div className='px-[24px] py-[16px]'>
                                    <h1 className='text-left text-[24px] text-[#1A2434]'>{currentClass.title}</h1>
                                    <div className='flex mt-[24px] justify-between'>
                                        <h1 className='text-[14px] font-bold text-[#1A2434]'>{currentClass.total_lesson} Lesson</h1>
                                        <p className='text-[14px] text-[#1A2434] flex gap-[10.13px]'>
                                            <span><CiClock1 width={12.75} className='mt-[4px]' /></span>
                                            {activeClass === 'PaidClass' ? currentClass.duration : currentClass.Date}
                                        </p>
                                    </div>
                                    <div>
                                        {currentClass.topic && currentClass.topic.map((item, index) => (
                                            <p key={index} className='text-[14px] text-[#1A2434] text-left mt-[10px] font-bold'>{index + 1}. {item}</p>
                                        ))}
                                    </div>
                                    <div className='flex justify-between mt-[24px]'>
                                        <p className='text-left text-[24px] text-[#1A2434]'>
                                            {activeClass === 'PaidClass' ? currentClass.price : currentClass.status}
                                        </p>
                                        <p className='text-left text-[24px] text-[#1A2434] flex items-center'>
                                            <FaStar className='text-[#f5ba20] mr-1' />
                                            {currentClass.rate}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mt-4 p-4 bg-white rounded-lg flex justify-center items-center transition-all duration-300">
                            <h1 className="text-[24px] text-[#1A2434]">Coming Soon</h1>
                        </div>
                    )}
                    <div className="mt-[40px] bg-[#f5ba20] text-white transition-all duration-700 flex items-center justify-center ease-in-out w-[307px] h-[72px] rounded-[16px] hover:shadow-xl hover:scale-105">
                        <h1 className='text-left text-[20px] text-white font-bold flex items-center gap-[16px]'>View all class <span className='flex items-center'><FaArrowRightLong /></span></h1>
                    </div>
                </center>
            </div>
        </section>
    );
};

export default Product;
