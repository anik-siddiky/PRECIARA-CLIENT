const tabs = [
    { name: 'allProducts', label: 'ALL PRODUCTS' },
    { name: 'ring', label: 'RING' },
    { name: 'earring', label: 'EAR RING' }
];

const MobileDrawerTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex border-b border-gray-200'>
            {tabs.map((tab) => {
                const isActive = activeTab === tab.name;

                return (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`flex-1 py-3 text-xs font-bold transition-all duration-300 relative ${isActive
                                ? 'bg-black text-white'
                                : 'bg-white text-gray-400 hover:text-gray-600 hover:bg-gray-50'
                            }`}>
                        {tab.label}
                        {isActive && (
                            <span className='absolute bottom-0 left-0 right-0 h-0.5 bg-white'></span>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

export default MobileDrawerTabs;