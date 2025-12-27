import { Link } from 'react-router';

import necklace1 from '../../assets/allProducts/necklace-2.jpg';
import necklace2 from '../../assets/allProducts/necklace-1.jpg';
import earing from '../../assets/allProducts/earring.jpg';
import ring from '../../assets/allProducts/ring.jpg';

import ring1 from '../../assets/rings/ring-1.jpg';
import ring2 from '../../assets/rings/ring-2.jpg';
import ring3 from '../../assets/rings/ring-3.jpg';

import earRing1 from '../../assets/earrings/ear-ring-1.jpg';
import earRing2 from '../../assets/earrings/ear-ring-2.jpg';
import earRing3 from '../../assets/earrings/ear-ring-3.jpg';

const ImageCard = ({ image, title }) => (
    <Link to="#" className='group cursor-pointer relative overflow-hidden rounded-lg h-40 block'>
        <img
            src={image}
            alt={title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
        />
        <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
            <h3 className='text-lg font-bold mb-1'>{title}</h3>
            <p className='text-xs font-light'>Explore →</p>
        </div>
    </Link>
);

const SmallImageCard = ({ image, title }) => (
    <Link to="#" className='group cursor-pointer block'>
        <div className='overflow-hidden rounded-lg mb-2'>
            <img
                src={image}
                alt={title}
                className='w-full h-28 object-cover group-hover:scale-110 transition-transform duration-500'
            />
        </div>
        <p className='text-xs font-semibold text-gray-800 text-center group-hover:underline'>{title}</p>
    </Link>
);

const LinkSection = ({ title, links }) => (
    <div className='mb-6'>
        <h3 className='font-bold text-sm mb-3 text-gray-800'>{title}</h3>
        <ul className='space-y-2 text-xs text-gray-600'>
            {links.map((link, index) => (
                <li key={index}>
                    <Link to="#" className='hover:text-black transition'>{link}</Link>
                </li>
            ))}
        </ul>
    </div>
);

const AllProductsContent = () => (
    <div className='p-4'>
        <div className='grid grid-cols-2 gap-3 mb-6'>
            <ImageCard image={necklace1} title="NECKLACES" />
            <ImageCard image={earing} title="EARRINGS" />
            <ImageCard image={ring} title="RINGS" />
            <ImageCard image={necklace2} title="BRACELETS" />
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <LinkSection
                title="SHOP BY METAL"
                links={['Gold Jewelry', 'Silver Jewelry', 'Platinum Jewelry', 'Rose Gold Jewelry']}
            />
            <LinkSection
                title="COLLECTIONS"
                links={['New Arrivals', 'Best Sellers', 'Bridal Collection', 'Gift Ideas']}
            />
            <LinkSection
                title="SPECIAL OFFERS"
                links={['Sale - Up to 40%', 'Limited Edition', 'Seasonal Collection', 'Custom Design']}
            />
            <LinkSection
                title="EXPLORE MORE"
                links={['Trending Now', 'Celebrity Favorites', 'Gift Guides', 'View All Products']}
            />
        </div>
    </div>
);

const RingContent = () => (
    <div className='p-4'>
        <div className='grid grid-cols-3 gap-3 mb-6'>
            <SmallImageCard image={ring1} title="Solitaire" />
            <SmallImageCard image={ring2} title="Eternity" />
            <SmallImageCard image={ring3} title="Vintage" />
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <LinkSection
                title="SHOP BY STYLE"
                links={['Classic Rings', 'Modern Rings', 'Vintage Rings', 'Minimalist Rings', 'Statement Rings']}
            />
            <LinkSection
                title="SHOP BY OCCASION"
                links={['Engagement Rings', 'Wedding Bands', 'Anniversary Rings', 'Promise Rings', 'Everyday Rings']}
            />
        </div>
    </div>
);

const EarringContent = () => (
    <div className='p-4'>
        <div className='grid grid-cols-3 gap-3 mb-6'>
            <SmallImageCard image={earRing1} title="Studs" />
            <SmallImageCard image={earRing2} title="Hoops" />
            <SmallImageCard image={earRing3} title="Drop" />
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <LinkSection
                title="SHOP BY STYLE"
                links={['Stud Earrings', 'Hoop Earrings', 'Drop Earrings', 'Chandelier Earrings', 'Dangle Earrings']}
            />
            <LinkSection
                title="SHOP BY OCCASION"
                links={['Wedding Earrings', 'Party Earrings', 'Everyday Earrings', 'Bridal Earrings', 'Gift Earrings']}
            />
        </div>
    </div>
);

const tabIndex = {
    allProducts: 0,
    ring: 1,
    earring: 2
};

const MobileDrawerContent = ({ activeTab }) => {
    const getTabClasses = (tabName) => {
        const isActive = activeTab === tabName;
        
        if (isActive) {
            return 'opacity-100 translate-x-0';
        }
        
        const currentIndex = tabIndex[activeTab];
        const thisIndex = tabIndex[tabName];
        
        if (thisIndex < currentIndex) {
            return 'opacity-0 -translate-x-full absolute inset-0 pointer-events-none';
        } else {
            return 'opacity-0 translate-x-full absolute inset-0 pointer-events-none';
        }
    };

    return (
        <div className='overflow-y-auto scrollbar-hide h-full relative overflow-x-hidden'>
            <div className={`transition-all duration-300 ease-in-out ${getTabClasses('allProducts')}`}>
                <AllProductsContent />
            </div>

            <div className={`transition-all duration-300 ease-in-out ${getTabClasses('ring')}`}>
                <RingContent />
            </div>

            <div className={`transition-all duration-300 ease-in-out ${getTabClasses('earring')}`}>
                <EarringContent />
            </div>
        </div>
    );
};

export default MobileDrawerContent;