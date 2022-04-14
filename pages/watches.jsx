import React from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const watches = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4 ">
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="/product1.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">₹ 16599/- </p>
                                <button className='bg-green-600 mt-2 text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="/featured2.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">₹ 21599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="product3.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">₹ 12599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="product4.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">₹ 18599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="product5.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">₹ 16599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="featured1.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">₹ 21599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="featured2.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                                <p className="mt-1">₹ 12599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="featured3.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                                <p className="mt-1">₹ 18599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="/product1.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                                <p className="mt-1">₹ 16599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                    <Link href={"/product/"}>
                        <div className="lg:w-1/5 md:w-1/3 p-4 w-full cursor-pointer">
                            <a className="block relative h-60 overflow-hidden rounded-t-xl bg-slate-200 p-4">
                                <img alt="ecommerce" className="object-cover object-center m-auto h-full block" src="/featured2.png" />
                            </a>
                            <div className="bg-slate-300 p-4 rounded-b-xl text-center md:text-left">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Wrist Watch</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                                <p className="mt-1">₹ 21599/- </p>
                                <button className='bg-green-600 mt-2 m-auto text-gray-200 rounded w-full py-1'>Add to Cart <AiOutlineShoppingCart className='text-gray-200 ml-2 inline text-right' /></button>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default watches
