import necklace1 from '../../assets/necklaces/necklace-1.jpg';
import necklace2 from '../../assets/necklaces/necklace-2.jpg';
import necklace3 from '../../assets/necklaces/necklace-3.jpg';

const NecklaceSection = () => {
    return (
        <div className='border-t border-gray-200 p-4 flex flex-col gap-6'>
            <div className='grid grid-cols-3 gap-3'>
                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={necklace1}
                            alt="Necklace Collection 1"
                            className='w-full h-48 object-cover'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Classic Chains</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={necklace2}
                            alt="Necklace Collection 2"
                            className='w-full h-48 object-cover'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Elegant Pendants</p>
                </div>

                <div className='group cursor-pointer'>
                    <div className='overflow-hidden rounded-lg mb-2'>
                        <img
                            src={necklace3}
                            alt="Necklace Collection 3"
                            className='w-full h-48 object-cover'
                        />
                    </div>
                    <p className='text-xs font-semibold text-gray-800 group-hover:underline'>Layered Beauty</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-8'>
                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY STYLE</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Chain Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Pendant Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Choker Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Layered Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Statement Necklaces</li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold text-sm mb-4 text-gray-800'>SHOP BY OCCASION</h3>
                    <ul className='space-y-2 text-xs text-gray-600'>
                        <li className='hover:text-black cursor-pointer transition'>Wedding Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Party Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Everyday Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Bridal Necklaces</li>
                        <li className='hover:text-black cursor-pointer transition'>Gift Necklaces</li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default NecklaceSection;