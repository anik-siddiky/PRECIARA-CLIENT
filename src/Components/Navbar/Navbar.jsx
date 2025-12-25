import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoBagOutline, IoPersonOutline, IoSearchOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from 'react-router';
import RingNavSection from './RingNavSection';
import EarRingNavSection from './EarRingNavSection';
import AllProductNavSection from './AllProductNavSection';
import { IoCloseOutline } from 'react-icons/io5';
import MobileDrawer from './MobileDrawer';

const messages = [
    '30 DAYS RETURN',
    'EXCLUSIVE COLLECTION',
    'UPTO 25% DISCOUNT'
];

const navItems = [
    { name: 'allProducts', label: 'ALL PRODUCTS' },
    { name: 'ring', label: 'RING' },
    { name: 'earring', label: 'EAR RING' }
];

const dropdownComponents = {
    allProducts: AllProductNavSection,
    ring: RingNavSection,
    earring: EarRingNavSection
};

const NavDropdown = ({ name, label, activeDropdown, setActiveDropdown }) => (
    <div
        className={`nav-dropdown-trigger flex items-center cursor-pointer group pb-6 -mb-6 ${activeDropdown === name ? 'text-black' : ''}`}
        onMouseEnter={() => setActiveDropdown(name)}
        onClick={() => setActiveDropdown(activeDropdown === name ? null : name)}
    >
        <span className='relative'>
            {label}
            <span className={`absolute left-0 bottom-0 h-0.5 bg-gray-700 transition-all duration-500 ${activeDropdown === name ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </span>
        <MdKeyboardArrowDown className={`transition-transform duration-600 ${activeDropdown === name ? '-rotate-90' : ''}`} />
    </div>
);

const IconButton = ({ children }) => (
    <div className='cursor-pointer group relative'>
        {children}
        <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full'></span>
    </div>
);

const Navbar = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);

            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
                setFade(true);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (activeDropdown &&
                !event.target.closest('.nav-dropdown-trigger') &&
                !event.target.closest('.nav-dropdown-content')) {
                setActiveDropdown(null);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [activeDropdown]);

    const ActiveDropdownComponent = activeDropdown ? dropdownComponents[activeDropdown] : null;

    return (
        <div className='relative'>
            <div className='bg-black text-white text-[11px] font-bold'>
                <div className='lg:grid lg:grid-cols-3 items-center lg:py-2.5 md:py-2 py-1.5 px-12'>
                    <div></div>

                    <div className='text-center lg:text-[11px] text-[10px]'>
                        <p className={`transition-all duration-700 ${fade ? 'opacity-100 blur-0' : 'opacity-0 blur-sm'}`}>
                            {messages[currentIndex]}
                        </p>
                    </div>

                    <div className='justify-end space-x-3 hidden md:flex'>
                        <Link to="/help">HELP</Link>
                        <Link to="/wishlist">WISHLIST</Link>
                        <Link to="/join">JOIN US</Link>
                    </div>
                </div>
            </div>

            <div className='bg-white grid grid-cols-3 lg:grid-cols-2 px-4 lg:px-12 justify-between items-center py-5 lg:py-4'>
                <div className='lg:hidden cursor-pointer' onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    {isDrawerOpen ? (
                        <IoCloseOutline size={28} />
                    ) : (
                        <AiOutlineMenu size={26} />
                    )}
                </div>

                <div className='flex items-center lg:gap-7 justify-center lg:justify-normal'>
                    <h1 className='text-xl lg:text-2xl font-extrabold'>
                        <Link to='/'>PRECIARA</Link>
                    </h1>

                    <div className='hidden lg:flex text-[11px] font-bold text-gray-700 space-x-2'>
                        {navItems.map((item) => (
                            <NavDropdown
                                key={item.name}
                                name={item.name}
                                label={item.label}
                                activeDropdown={activeDropdown}
                                setActiveDropdown={setActiveDropdown}
                            />
                        ))}
                    </div>
                </div>

                <div className='flex items-center gap-2.5 lg:gap-3.5 justify-end'>
                    <p className='font-extralight text-xs text-gray-700 hidden lg:block cursor-pointer group'>
                        <span className='relative'>
                            Bangladesh
                            <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-gray-700 transition-all duration-500 group-hover:w-full'></span>
                        </span>
                    </p>

                    <IconButton>
                        <IoSearchOutline className='mt-0.5' size={23} />
                    </IconButton>

                    <IconButton>
                        <IoPersonOutline size={22} />
                    </IconButton>

                    <IconButton>
                        <IoBagOutline size={22} />
                    </IconButton>
                </div>
            </div>

            {activeDropdown && ActiveDropdownComponent && (
                <div
                    className='nav-dropdown-content absolute left-0 right-0 z-50 bg-white shadow-lg'
                    onMouseEnter={() => setActiveDropdown(activeDropdown)}
                    onMouseLeave={() => setActiveDropdown(null)}
                >
                    <ActiveDropdownComponent />
                </div>
            )}
            <MobileDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        </div>
    );
};

export default Navbar;