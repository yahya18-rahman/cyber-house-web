import Image from "next/image"
import Logo from "../../assets/logo.png"
import { FaInstagram, FaLinkedin,FaDiscord } from "react-icons/fa";

const footer = () => {
    return (
        <section className="bg-[#000000] w-full p-[80px] " >
            <div className="flex justify-between" >
                
                    <div className="flex flex-col w-[441px]">
                        <div className="flex gap-[8px]">
                        <Image width={42} height={42} src={Logo} />
                        <h1 className="text-white text-[27px] font-bold" >Cyber House</h1>
                        </div>
                        <p className="mt-[24px] text-left text-white text-[20px]">Cyber House is Indonesia is Indonesia’s most
                        comprehensive ed-tech company
                        specializing in Cyber Security, Web
                        3, and Blockchain. We offering
                        enjoyable, flexible, and affordable
                        learning experiences for all,
                        adhering to our motto of equal
                        learning opportunities for everyone</p>
                    </div>
                    <div className="flex flex-col w-[141px]">
                        <h1 className="text-white text-[27px] font-bold" >Quick links</h1>
                        <p className="mt-[24px] text-left text-white text-[20px]">About Us</p>
                        <p className="mt-[24px] text-left text-white text-[20px]">Our Class</p>
                        <p className="mt-[24px] text-left text-white text-[20px]">Blog</p>
                        <p className="mt-[24px] text-left text-white text-[20px]">Contact</p>
                    </div>
                    <div className="flex flex-col w-[200px]">
                        <h1 className="text-white text-[27px] font-bold" >Social Media</h1>
                       <div className="flex gap-8 mt-[16px]">
                        <FaDiscord  className="text-white" size={30}/>
                        <FaInstagram  className="text-white" size={30}/>
                        <FaLinkedin  className="text-white" size={30}/>
                       </div>
                    </div>
            </div>
        </section>
    )
}

export default footer