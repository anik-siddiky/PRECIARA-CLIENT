const tabs = [
    { name: 'allProducts', label: 'ALL PRODUCTS' },
    { name: 'ring', label: 'RING' },
    { name: 'earring', label: 'EAR RING' }
];

const MobileDrawerTabs = ({ activeTab, setActiveTab }) => {
    return (
        <div className='flex gap-2 p-3'>
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex-1 py-3 text-xs font-bold transition-all duration-300 rounded-lg ${activeTab === tab.name
                            ? 'bg-white text-black shadow-[0_4px_0_0_#000] translate-y-0'
                            : 'bg-gray-200 text-gray-500 shadow-[0_4px_0_0_#9ca3af] hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#9ca3af]'
                        } active:translate-y-0.5 active:shadow-[0_2px_0_0_#000]`}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default MobileDrawerTabs;