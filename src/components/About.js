import about from '../assests/about.jpg';
export default function About()
{
    return<section className="flex flex-col md:flex-row bg-primary px-5">
        <div className='md:w-1/2 py-5'>
           <img src={about}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
           <div className='flex flex-col justify-center text-white'>
             <h1 className='text-4xl text-white border-b-4 mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>Hi, I am Swathi E K. I love to code in various programming languages</p>
            <p className='pb-5'>I know some basics of web development. I know some advanced concpets in C language</p>
            <p className='pb-5'>I am a writer too. I have written some short stories and blogs</p>
           </div>
        </div>

    </section>
}