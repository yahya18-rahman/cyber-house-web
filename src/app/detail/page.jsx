import Kelas from './class'
import Navbar from "../components/navbar"
export default function details () {
    return (
        <>
        <Navbar/>
        <div className="px-[80px] py-[45px] max-sm:px-2">
            <h1 className="text-black font-bold text-[40px] max-sm:text-[29px]" >Welcome To Cyber House</h1>
            <p className="text-[30px] max-sm:text-[15px]" >Discover our comprehensive <br className='max-sm:hidden'/> cybersecurity courses and start your <br className='max-sm:hidden'/> journey today.</p>
        </div>
        <Kelas/>
        </>
    )
}