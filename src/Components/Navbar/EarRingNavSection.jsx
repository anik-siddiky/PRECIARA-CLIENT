import React from 'react';

const EarRingNavSection = () => {
    return (
        <div className='border-t border-gray-200 py-8 px-12'>
            <div className='grid grid-cols-4 gap-8'>
                {/* Column 1 */}
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY STYLE</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Stud Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Hoop Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Drop Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Chandelier Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Dangle Earrings</li>
                    </ul>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY METAL</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Gold Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Silver Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Platinum Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Rose Gold Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>White Gold Earrings</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY GEMSTONE</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Diamond Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Pearl Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Sapphire Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Ruby Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Emerald Earrings</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY OCCASION</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Wedding Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Party Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Everyday Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Bridal Earrings</li>
                        <li className='hover:text-black cursor-pointer transition'>Gift Earrings</li>
                    </ul>
                </div>
            </div>

            {/* Featured Section */}
            <div className='mt-8 pt-6 border-t border-gray-100'>
                <div className='grid grid-cols-3 gap-6'>
                    <div className='bg-gray-50 p-4 rounded hover:bg-gray-100 transition cursor-pointer'>
                        <h4 className='font-bold text-xs mb-2 text-gray-800'>NEW ARRIVALS</h4>
                        <p className='text-xs text-gray-600'>Discover the latest collection</p>
                    </div>
                    <div className='bg-gray-50 p-4 rounded hover:bg-gray-100 transition cursor-pointer'>
                        <h4 className='font-bold text-xs mb-2 text-gray-800'>BEST SELLERS</h4>
                        <p className='text-xs text-gray-600'>Shop our most popular styles</p>
                    </div>
                    <div className='bg-gray-50 p-4 rounded hover:bg-gray-100 transition cursor-pointer'>
                        <h4 className='font-bold text-xs mb-2 text-gray-800'>SALE ITEMS</h4>
                        <p className='text-xs text-gray-600'>Up to 40% off selected items</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EarRingNavSection;