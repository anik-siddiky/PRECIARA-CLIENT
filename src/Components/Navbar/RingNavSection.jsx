import React from 'react';

const RingNavSection = () => {
    return (
        <div className='border-t border-gray-200 py-8 px-12'>
            <div className='grid grid-cols-4 gap-8'>
                <div>
                    <h3 className='font-bold text-sm mb-3'>SHOP BY STYLE</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Classic Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Modern Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Vintage Rings</li>
                    </ul>
                </div>
                <div>
                    <h3 className='font-bold text-sm mb-3'>SHOP BY METAL</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Gold</li>
                        <li className='hover:text-black cursor-pointer transition'>Silver</li>
                        <li className='hover:text-black cursor-pointer transition'>Platinum</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RingNavSection;