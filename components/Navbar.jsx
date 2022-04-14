import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <header className="text-gray-400 bg-gray-900 body-font  shadow-lg sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"}>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <Image src="/favicon.ico" alt="" width={30} height={30} />
                        <span className="ml-3 text-xl">TrendZ Wear</span>
                    </a>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/watches"}><a className="mr-5 hover:text-white">Watches</a></Link>
                    <Link href={"/tshirts"}><a className="mr-5 hover:text-white">Tshirts</a></Link>
                    <Link href={"/mugs"}><a className="mr-5 hover:text-white">Mugs</a></Link>
                </nav>
                <a href='/cart'><AiOutlineShoppingCart className='text-xl md:text-2xl text-gray-200' /></a>
            </div>
        </header>
    )
}

export default Navbar
Navbar