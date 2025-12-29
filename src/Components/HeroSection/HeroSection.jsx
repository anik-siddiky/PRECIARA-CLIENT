import { Link } from 'react-router';

const HeroSection = () => {
    return (
        <div className='relative h-[70vh] lg:h-screen w-full overflow-hidden'>
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className='absolute inset-0 w-full h-full object-cover'>
                <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            <div className='absolute inset-0 bg-black/40'></div>
            <div className='relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4'>
                <p className='text-xs md:text-sm tracking-[0.3em] mb-4 text-gray-300 uppercase'>Exclusive Collection 2025</p>
                <p className='text-sm md:text-base lg:text-lg text-gray-300 max-w-xl mb-8 leading-relaxed'>
                    Discover timeless elegance with our exquisite collection of handcrafted jewelry.
                    Each piece tells a story of beauty and luxury.</p>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <Link to="/shop" className='px-8 py-3 bg-white text-black text-sm font-bold tracking-wider hover:bg-gray-200 transition-all duration-300'>SHOP NOW</Link>
                    <Link to="/collections" className='px-8 py-3 border border-white text-white text-sm font-bold tracking-wider hover:bg-white hover:text-black transition-all duration-300'>VIEW COLLECTIONS</Link>
                </div>
            </div>

            <div className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce'>
                <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2'>
                    <div className='w-1 h-2 bg-white rounded-full'></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;