import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';
export default function Header(){
    const[toggle,settoggle]=useState(false);
    return <header className="flex justify-between bg-primary px-5 py-2">
        <a className="font-bold text-black" href="#">Swathi</a>
        <nav className="hidden md:block">
          <ul className="flex text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        {toggle && <nav className="block md:hidden">
          <ul className="flex flex-col text-white mobile-nav">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Project</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>}
        <button onClick={()=>settoggle(!toggle)} className='block md:hidden'><Bars3Icon className="text-white h-5"/></button>
    </header>
}