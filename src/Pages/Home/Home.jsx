import React from 'react';
import HeroSection from '../../Components/HeroSection/HeroSection';
import FeaturedProducts from '../../Components/FeaturedProduct/FeaturedProducts';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <div className='lg:max-w-7xl mx-auto px-4 lg:px-0 py-8 lg:py-12'>
                <FeaturedProducts />
            </div>
        </div>
    );
};

export default Home;