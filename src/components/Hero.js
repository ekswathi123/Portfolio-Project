import techie from '../assests/techie.jpg';
import { AiOutlineInstagram, AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Hero()
{
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-4xl'><br/> I am Swathi
        <p className='text-2xl'>I am a Software Engineer</p>
        </h1>
        <div className='flex py-8'>
            <a href='#' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href='#' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href='#' className='hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={techie}/>
    </section>
}