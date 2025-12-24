import earRing1 from '../../assets/earrings/ear-ring-1.jpg'
import earRing2 from '../../assets/earrings/ear-ring-2.jpg'
import earRing3 from '../../assets/earrings/ear-ring-3.jpg'

const EarRingNavSection = () => {
    return (
        <div className='border-t border-gray-200 py-8 px-12'>
            <div className='grid grid-cols-5 gap-8'>
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

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={earRing1}
                            alt="Earring Collection 1"
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Classic Studs</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={earRing2}
                            alt="Earring Collection 2"
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Elegant Hoops</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={earRing3}
                            alt="Earring Collection 3"
                            className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Drop Elegance</p>
                </div>
            </div>
        </div>
    );
};

export default EarRingNavSection;