import ring1 from '../../assets/rings/ring-1.jpg'
import ring2 from '../../assets/rings/ring-2.jpg'
import ring3 from '../../assets/rings/ring-3.jpg'

const RingNavSection = () => {
    return (
        <div className='border-t border-gray-200 py-8 px-12'>
            <div className='grid grid-cols-6 gap-8'>
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY STYLE</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Classic Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Modern Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Vintage Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Minimalist Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Statement Rings</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY OCCASION</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Engagement Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Wedding Bands</li>
                        <li className='hover:text-black cursor-pointer transition'>Anniversary Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Promise Rings</li>
                        <li className='hover:text-black cursor-pointer transition'>Everyday Rings</li>
                    </ul>
                </div>

                <div>
                    
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img 
                            src={ring1} 
                            alt="Ring Collection 1" 
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Solitaire Diamond</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img 
                            src={ring2} 
                            alt="Ring Collection 2" 
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Eternity Band</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img 
                            src={ring3} 
                            alt="Ring Collection 3" 
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Vintage Halo</p>
                </div>
            </div>
        </div>
    );
};

export default RingNavSection;