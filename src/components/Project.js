import img1 from '../assests/img1.jpg';
import img2 from '../assests/img2.png';
import img3 from '../assests/img3.png';
export default function Projects()
{
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary" id='project'>
        <div className="w-1/2">
            <div className="flex justify-center">
            <h1 className='text-4xl text-white border-b-4 mb-5 w-[150p x] font-bold'>Projects</h1>
            </div>
      
       </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                   <img className='h-[250px] w-[500px]'src={img1}></img>
                   <div className='project-desc'>
                      <p className='text-center px-5 py-5'>I have built a simple memory game using HTML & JS</p>
                   </div>
                </div>
                <div className='relative'>
                   <img className='h-[250px] w-[500px]'src={img2}></img>
                   <div className='project-desc'>
                       <p className='text-center px-5 py-5'>I have built a traffic assitant model using AI</p>
                   </div>

                </div>
                <div className='relative'>
                   <img className='h-[250px] w-[500px]'src={img3}></img> 
                   <div className='project-desc'>
                       <p className='text-center px-5 py-5'>I have built a simple blog website</p>
                   </div>

                </div>
               
              
               
            </div>

        </div>
    </section>
}