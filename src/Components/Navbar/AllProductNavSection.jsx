import necklace1 from '../../assets/allProducts/necklace-2.jpg'
import necklace2 from '../../assets/allProducts/necklace-1.jpg'
import earing from '../../assets/allProducts/earring.jpg'
import ring from '../../assets/allProducts/ring.jpg'

const AllProductNavSection = () => {
    return (
        <div className='border-t border-gray-200 py-8 px-12'>
            <div className='grid grid-cols-4 gap-6'>
                {/* Necklaces Card */}
                <div className='group cursor-pointer relative overflow-hidden rounded-lg h-64'>
                    <img 
                        src={necklace1} 
                        alt="Necklaces" 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                        <h3 className='text-2xl font-bold mb-2'>NECKLACES</h3>
                        <p className='text-sm font-light'>Explore Collection →</p>
                    </div>
                </div>

                {/* Earrings Card */}
                <div className='group cursor-pointer relative overflow-hidden rounded-lg h-64'>
                    <img 
                        src={earing} 
                        alt="Earrings" 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                        <h3 className='text-2xl font-bold mb-2'>EARRINGS</h3>
                        <p className='text-sm font-light'>Explore Collection →</p>
                    </div>
                </div>

                {/* Rings Card */}
                <div className='group cursor-pointer relative overflow-hidden rounded-lg h-64'>
                    <img 
                        src={ring} 
                        alt="Rings" 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                        <h3 className='text-2xl font-bold mb-2'>RINGS</h3>
                        <p className='text-sm font-light'>Explore Collection →</p>
                    </div>
                </div>

                {/* Bracelets Card */}
                <div className='group cursor-pointer relative overflow-hidden rounded-lg h-64'>
                    <img 
                        src={necklace2} 
                        alt="Bracelets" 
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300'></div>
                    <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
                        <h3 className='text-2xl font-bold mb-2'>BRACELETS</h3>
                        <p className='text-sm font-light'>Explore Collection →</p>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className='mt-8 pt-6 border-t border-gray-100'>
                <div className='grid grid-cols-4 gap-8'>
                    <div>
                        <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY METAL</h3>
                        <ul className='space-y-2 text-xs text-gray-600'>
                            <li className='hover:text-black cursor-pointer transition'>Gold Jewelry</li>
                            <li className='hover:text-black cursor-pointer transition'>Silver Jewelry</li>
                            <li className='hover:text-black cursor-pointer transition'>Platinum Jewelry</li>
                            <li className='hover:text-black cursor-pointer transition'>Rose Gold Jewelry</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold text-sm mb-4 text-gray-800'>COLLECTIONS</h3>
                        <ul className='space-y-2 text-xs text-gray-600'>
                            <li className='hover:text-black cursor-pointer transition'>New Arrivals</li>
                            <li className='hover:text-black cursor-pointer transition'>Best Sellers</li>
                            <li className='hover:text-black cursor-pointer transition'>Bridal Collection</li>
                            <li className='hover:text-black cursor-pointer transition'>Gift Ideas</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold text-sm mb-4 text-gray-800'>SPECIAL OFFERS</h3>
                        <ul className='space-y-2 text-xs text-gray-600'>
                            <li className='hover:text-black cursor-pointer transition'>Sale - Up to 40%</li>
                            <li className='hover:text-black cursor-pointer transition'>Limited Edition</li>
                            <li className='hover:text-black cursor-pointer transition'>Seasonal Collection</li>
                            <li className='hover:text-black cursor-pointer transition'>Custom Design</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className='font-bold text-sm mb-4 text-gray-800'>EXPLORE MORE</h3>
                        <ul className='space-y-2 text-xs text-gray-600'>
                            <li className='hover:text-black cursor-pointer transition'>Trending Now</li>
                            <li className='hover:text-black cursor-pointer transition'>Celebrity Favorites</li>
                            <li className='hover:text-black cursor-pointer transition'>Gift Guides</li>
                            <li className='hover:text-black cursor-pointer transition'>View All Products</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductNavSection;