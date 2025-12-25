const tabs = [
    { name: 'allProducts', label: 'ALL PRODUCTS' },
    { name: 'ring', label: 'RING' },
    { name: 'earring', label: 'EAR RING' }
];

const MobileDrawerTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex border-b border-gray-200'>
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex-1 py-3 text-xs font-bold transition-all duration-300 ${
                        activeTab === tab.name
                            ? 'text-black border-b-2 border-black'
                            : 'text-gray-500 hover:text-gray-700'
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default MobileDrawerTabs;