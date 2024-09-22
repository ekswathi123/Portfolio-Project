import techie from '../assests/techie.jpg';
import { AiOutlineInstagram, AiOutlineLinkedin,AiOutlineGithub } from "react-icons/ai";
export default function Hero()
{ 
   const config={
    social:{
        insta:'https://www.instagram.com/silent_murmurs_/',
        git:'https://github.com/ekswathi123',
        linkedin:'https://www.linkedin.com/in/swathi-karthikeyan-45b598205/'
    }
   }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className='w-1/2 text-4xl'><br/> I am Swathi
        <p className='text-2xl'>I am a Software Engineer</p>
        </h1>
        <div className='flex py-8'>
            <a href={config.social.insta} target='_blank' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href={config.social.linkedin} target='_blank' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href={config.social.git} target='_blank' className='hover:text-white'><AiOutlineGithub size={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={techie}/>
    </section>
}