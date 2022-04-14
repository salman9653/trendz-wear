import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    return (
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href={"/"}>
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <Image src="/favicon.ico" alt="" width={30} height={30} />
                        <span className="ml-3 text-xl">TrendZ Wear</span>
                    </a>
                </Link>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link href={"/watches"}><a class="mr-5 hover:text-white">Watches</a></Link>
                    <Link href={"/tshirts"}><a class="mr-5 hover:text-white">Tshirts</a></Link>
                    <Link href={"/mugs"}><a class="mr-5 hover:text-white">Mugs</a></Link>
                </nav>
                <AiOutlineShoppingCart className='text-xl md:text-2xl text-gray-200' />
            </div>
        </header>
    )
}

export default Navbar
Navbar