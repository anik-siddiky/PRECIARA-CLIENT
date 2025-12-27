import { useState, useEffect } from 'react';
import MobileDrawerTabs from './MobileDrawerTabs';
import MobileDrawerContent from './MobileDrawerContent';

const MobileDrawer = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('allProducts');

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                onClose();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [onClose]);

    return (
        <div
            className={`lg:hidden fixed left-0 right-0 bottom-0 bg-white z-40 transition-all duration-500 ease-in-out flex flex-col ${isOpen
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-full pointer-events-none'
                }`}
            style={{ top: '92px' }}
        >
            {/* Tabs - Fixed */}
            <div className='flex-shrink-0'>
                <MobileDrawerTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Content - Scrollable */}
            <div className='flex-1 overflow-hidden'>
                <MobileDrawerContent activeTab={activeTab} />
            </div>
        </div>
    );
};

export default MobileDrawer;