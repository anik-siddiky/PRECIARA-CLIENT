import React from 'react';
import { Link } from 'react-router';
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className='px-4 lg:px-12 py-12 lg:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-6'>
                    <div className='lg:col-span-2'>
                        <h2 className='text-2xl font-extrabold tracking-wide mb-4 font-brand'>PRECIARA</h2>
                        <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                            Discover timeless elegance with our exquisite collection of handcrafted jewelry.
                            Each piece tells a story of beauty, craftsmanship, and luxury.
                        </p>
                        <div className='flex gap-4'>
                            <Link to="#" className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300'>
                                <IoLogoFacebook size={18} />
                            </Link>
                            <Link to="#" className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300'>
                                <IoLogoInstagram size={18} />
                            </Link>
                            <Link to="#" className='w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300'>
                                <IoLogoPinterest size={18} />
                            </Link>
                        </div>
                    </div>

                    <div className='lg:col-span-1'>
                        <h3 className='text-sm font-bold mb-4 tracking-wider'>QUICK LINKS</h3>
                        <ul className='space-y-3 text-sm text-gray-400'>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>New Arrivals</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Best Sellers</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Rings</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Earrings</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Necklaces</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Bracelets</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-1'>
                        <h3 className='text-sm font-bold mb-4 tracking-wider'>CUSTOMER SERVICE</h3>
                        <ul className='space-y-3 text-sm text-gray-400'>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>FAQs</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Shipping Info</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Returns & Exchanges</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Size Guide</Link>
                            </li>
                            <li>
                                <Link to="#" className='hover:text-white transition-colors duration-300'>Track Order</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:col-span-2'>
                        <h3 className='text-sm font-bold mb-4 tracking-wider'>CONTACT US</h3>
                        <ul className='space-y-4 text-sm text-gray-400'>
                            <li className='flex items-start gap-3'>
                                <IoLocationOutline size={20} className='shrink-0 mt-0.5' />
                                <span>123 Jewelry Lane, Diamond District, Dhaka 1205, Bangladesh</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoCallOutline size={20} className='shrink-0' />
                                <span>+880 1234-567890</span>
                            </li>
                            <li className='flex items-center gap-3'>
                                <IoMailOutline size={20} className='shrink-0' />
                                <span>hello@preciara.com</span>
                            </li>
                        </ul>
                        <div className='mt-6'>
                            <h4 className='text-sm font-bold mb-3 tracking-wider'>NEWSLETTER</h4>
                            <p className='text-gray-400 text-sm mb-3'>Subscribe for exclusive offers & updates</p>
                            <div className='flex'>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className='flex-1 bg-gray-900 border border-gray-700 px-4 py-2.5 text-sm focus:outline-none focus:border-white transition-colors duration-300' />
                                <button className='bg-white text-black px-6 py-2.5 text-sm font-bold hover:bg-gray-200 transition-colors duration-300 cursor-pointer'>SUBSCRIBE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t border-gray-800'></div>
            <div className='px-4 lg:px-12 py-6'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
                    <p className='text-gray-500 text-xs'>© 2025 PRECIARA. All rights reserved.</p>
                    <p className='text-gray-500 text-xs'>
                        Developed by{' '}
                        <a
                            href="https://aniksiddiky.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='text-white hover:underline transition-all duration-300'>
                            Anik Siddiky</a>
                    </p>
                    <div className='flex gap-6 text-xs text-gray-500'>
                        <Link to="#" className='hover:text-white transition-colors duration-300'>Privacy Policy</Link>
                        <Link to="#" className='hover:text-white transition-colors duration-300'>Terms of Service</Link>
                        <Link to="#" className='hover:text-white transition-colors duration-300'>Cookie Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;