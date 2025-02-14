"use client";
import Image from 'next/image';
import React from 'react';
import { CiSearch, CiStar } from 'react-icons/ci';
import Logo from './Logo';
import { IoBagOutline, IoPerson } from 'react-icons/io5';
import Account from './Account';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname(); // Get current path

    const navbar = [
        { name: 'Home', link: '/' },
        { name: 'Shop', link: '/Shop' },
        { name: 'About', link: '/About' },
        { name: 'Contact', link: '/Contact' },
    ];

    return (
        <header>
            <div className='flex justify-around items-center'>
                <Logo />
                <div className="flex items-center border-2 border-black/50 rounded-lg">
                    <CiSearch className="text-[24px] mx-2" />
                    <input
                        type="text"
                        className="w-72 h-[38px] outline-none px-3 border-none"
                        placeholder="What are you looking for?"
                    />
                    <button className="hover:opacity-80 bg-black text-white py-2 px-4 border-l-2 border-black/70">
                        Search
                    </button>
                </div>
                <div className='flex items-center gap-5'>
                    <Account />
                    <div className='relative'>
                        <div className='absolute top-[-6px] -right-[3px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center'>0</div>
                        <CiStar className='text-[30px]' />
                    </div>
                    <div className='relative'>
                        <div className='absolute top-[-7px] -right-[4px] w-4 h-4 bg-green-600 text-white rounded-full text-[12px] flex justify-center items-center'>0</div>
                        <IoBagOutline className='text-[27px]' />
                    </div>
                </div>
            </div>
            <nav className='md:mx-28 mt-2 flex justify-between items-center'>
                <ul className='flex gap-8 font-medium'>
                    {navbar.map((data, i: number) => (
                        <li key={i}>
                            <Link href={data.link} className={pathname === data.link ? "text-[#2EBB77]" : "text-black"}>
                                {data.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex gap-1 items-center'>
                    <Image 
                    src={"/Images/fire.png"}
                    width={22}
                    height={22}
                    alt='fire'
                    />
                <p className='font-medium'>
                     Extra <span className='font-semibold text-[#2EBB77]'>Sale 30%</span> off</p>
                    </div>
            </nav>

        </header>
    );
}

export default Header;
