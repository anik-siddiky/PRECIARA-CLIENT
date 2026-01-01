import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import {
    IoShareSocialOutline,
    IoChevronForward,
    IoShieldCheckmark,
    IoReload,
    IoCarOutline,
    IoStorefrontOutline,
    IoStar,
    IoAdd,
    IoRemove
} from 'react-icons/io5';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Thumbs, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';

import ProductCard from '../../Components/Reuseable/ProductCard';

const ProductPage = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [showSizeGuide, setShowSizeGuide] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
                const foundProduct = data.find(p => p.slug === slug);
                setProduct(foundProduct);
                if (foundProduct?.availableSizes?.length > 0) {
                    setSelectedSize(foundProduct.availableSizes[0]);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error('Error:', err);
                setLoading(false);
            });
    }, [slug]);

    // useEffect(() => {
    //     setQuantity(1);
    //     setActiveTab('description');
    //     window.scrollTo(0, 0);
    // }, [slug]);

    if (loading) {
        return <ProductPageSkeleton />;
    }

    if (!product) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-4'>Product Not Found</h1>
                    <Link to='/shop' className='text-black underline'>
                        Back to Shop
                    </Link>
                </div>
            </div>
        );
    }

    const {
        name,
        description,
        shortDescription,
        price,
        originalPrice,
        discount,
        image,
        images,
        category,
        subcategory,
        availableSizes,
        tags
    } = product;

    const hasDiscount = discount > 0;
    const isBestSeller = tags?.includes('bestseller');
    const isNewArrival = tags?.includes('new arrival');

    const productImages = images?.length > 0 ? [image, ...images] : [image, image, image];

    const relatedProducts = allProducts
        .filter(p => p.category === category && p.id !== product.id)
        .slice(0, 5);

    const getSizeLabel = () => {
        if (category === 'ring') return 'Ring Size';
        if (category === 'necklace') return 'Chain Length';
        if (category === 'earring') return 'Size';
        return 'Size';
    };

    return (
        <div className='bg-white pb-20 lg:pb-0'>
            <div className='border-b border-gray-100'>
                <div className='lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-3 sm:py-4'>
                    <div className='flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-gray-500 overflow-x-auto whitespace-nowrap scrollbar-hide'>
                        <Link to='/' className='hover:text-black transition-colors flex-shrink-0'>Home</Link>
                        <IoChevronForward size={10} className='flex-shrink-0' />
                        <Link to='/shop' className='hover:text-black transition-colors flex-shrink-0'>Shop</Link>
                        <IoChevronForward size={10} className='flex-shrink-0' />
                        <Link to={`/shop/${category}`} className='hover:text-black transition-colors capitalize flex-shrink-0'>{category}</Link>
                        <IoChevronForward size={10} className='flex-shrink-0' />
                        <span className='text-black font-medium truncate max-w-[120px] sm:max-w-[200px]'>{name}</span>
                    </div>
                </div>
            </div>

            <div className='lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-6 sm:py-8 lg:py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16'>
                    <div className='space-y-3 sm:space-y-4'>
                        {(hasDiscount || isNewArrival || isBestSeller) && (
                            <div className='flex items-center gap-1 md:gap-1.5 lg:gap-2'>
                                {hasDiscount && (
                                    <span className='bg-black text-white font-bold px-1.5 py-0.5 text-[8px] md:px-2 md:py-1 md:text-[10px] lg:px-3 lg:py-1.5 lg:text-xs'>
                                        −{discount}%
                                    </span>
                                )}
                                {isNewArrival && (
                                    <span className='bg-white text-black font-bold px-1.5 py-0.5 text-[8px] md:px-2 md:py-1 md:text-[10px] lg:px-3 lg:py-1.5 lg:text-xs border border-black'>
                                        NEW
                                    </span>
                                )}
                                {isBestSeller && !isNewArrival && (
                                    <span className='bg-gray-900 text-white font-bold px-1.5 py-0.5 text-[8px] md:px-2 md:py-1 md:text-[10px] lg:px-3 lg:py-1.5 lg:text-xs'>
                                        BEST
                                    </span>
                                )}
                            </div>
                        )}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className='relative aspect-square overflow-hidden bg-white'>
                            <Swiper
                                spaceBetween={0}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                zoom={true}
                                modules={[FreeMode, Thumbs, Zoom]}
                                className='h-full w-full'
                                style={{ height: '100%', width: '100%' }}>
                                {productImages.map((img, index) => (
                                    <SwiperSlide
                                        key={index}
                                        style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div
                                            className='swiper-zoom-container'
                                            style={{ width: '100%', height: '100%' }}>
                                            <img
                                                src={img}
                                                alt={`${name} - ${index + 1}`}
                                                className='w-full h-full object-cover'
                                                style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className='absolute bottom-3 right-3 lg:bottom-4 lg:right-4 z-10 bg-black/60 text-white text-[9px] lg:text-[10px] px-2 lg:px-3 py-1 lg:py-1.5 hidden lg:block'>
                                PINCH TO ZOOM
                            </div>
                        </motion.div>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={8}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Thumbs]}
                            className='thumbs-swiper'
                            breakpoints={{
                                640: { spaceBetween: 10 },
                                1024: { spaceBetween: 12 }
                            }}>
                            {productImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <div className='aspect-square cursor-pointer border-2 border-transparent hover:border-black transition-colors overflow-hidden'>
                                        <img
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className='space-y-4 sm:space-y-5 lg:space-y-6'>

                        <div className='flex items-center gap-2'>
                            <span className='text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 uppercase'>{category}</span>
                            <span className='text-gray-300'>•</span>
                            <span className='text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-gray-500 uppercase'>{subcategory}</span>
                        </div>
                        <h1 className='text-xl sm:text-2xl lg:text-3xl font-bold text-black leading-tight'>{name}</h1>

                        <div className='flex items-center gap-2 sm:gap-3'>
                            <div className='flex items-center gap-0.5 sm:gap-1'>
                                {[...Array(5)].map((_, i) => (
                                    <IoStar key={i} className={i < 4 ? 'text-black' : 'text-gray-300'} size={12} />
                                ))}
                            </div>
                            <span className='text-[10px] sm:text-xs text-gray-500'>(24 Reviews)</span>
                        </div>

                        <p className='text-xs sm:text-sm text-gray-600 leading-relaxed'>
                            {shortDescription}
                        </p>

                        <div className='flex items-end gap-2 sm:gap-3 flex-wrap'>
                            <span className='text-2xl sm:text-3xl font-bold text-black'>৳{price}</span>
                            {hasDiscount && (
                                <>
                                    <span className='text-base sm:text-lg text-gray-400 line-through'>৳{originalPrice}</span>
                                    <span className='text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-1.5 sm:px-2 py-0.5'>
                                        Save ৳{originalPrice - price}
                                    </span>
                                </>
                            )}
                        </div>

                        <div className='h-px bg-gray-200'></div>

                        {availableSizes && availableSizes.length > 0 && (
                            <div className='space-y-2 sm:space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-xs sm:text-sm font-medium text-black'>{getSizeLabel()}</span>
                                    {category === 'ring' && (
                                        <button
                                            onClick={() => setShowSizeGuide(true)}
                                            className='text-[10px] sm:text-xs text-gray-500 underline hover:text-black transition-colors'>
                                            Size Guide
                                        </button>
                                    )}
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {availableSizes.map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`uppercase min-w-[50px] lg:min-w-[60px] px-3 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-xs font-medium border transition-all duration-300 ${selectedSize === size
                                                ? 'bg-black text-white border-black'
                                                : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className='space-y-2 sm:space-y-3'>
                            <span className='text-xs sm:text-sm font-medium text-black'>Quantity</span>
                            <div className='flex items-center'>
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className='w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors'>
                                    <IoRemove size={14} />
                                </button>
                                <div className='w-12 sm:w-14 h-9 sm:h-10 border-t border-b border-gray-300 flex items-center justify-center text-xs sm:text-sm font-medium'>
                                    {quantity}
                                </div>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className='w-9 h-9 sm:w-10 sm:h-10 border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors'>
                                    <IoAdd size={14} />
                                </button>
                            </div>
                        </div>

                        <div className='hidden sm:flex flex-col sm:flex-row gap-3'>
                            <button className='flex-1 bg-black text-white py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wider flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors'>
                                <TbShoppingCartPlus size={16} />
                                ADD TO CART
                            </button>
                            <button className='flex-1 bg-white text-black py-3 sm:py-4 text-xs sm:text-sm font-bold tracking-wider border-2 border-black flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-all duration-300'>
                                BUY NOW
                            </button>
                        </div>

                        <div className='flex items-center gap-3 sm:gap-4'>
                            <span className='text-[10px] sm:text-xs text-gray-500'>Share:</span>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <button className='w-7 h-7 sm:w-8 sm:h-8 border border-gray-200 flex items-center justify-center hover:border-black transition-colors'>
                                    <IoShareSocialOutline size={14} />
                                </button>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 gap-3 sm:gap-4 py-4 sm:py-6 border-t border-b border-gray-200'>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <IoCarOutline size={20} className='text-gray-700 flex-shrink-0' />
                                <div>
                                    <p className='text-[10px] sm:text-xs font-medium text-black'>Free Shipping</p>
                                    <p className='text-[9px] sm:text-[10px] text-gray-500'>Orders over ৳500</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <IoReload size={20} className='text-gray-700 flex-shrink-0' />
                                <div>
                                    <p className='text-[10px] sm:text-xs font-medium text-black'>Easy Returns</p>
                                    <p className='text-[9px] sm:text-[10px] text-gray-500'>7 days policy</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <IoShieldCheckmark size={20} className='text-gray-700 flex-shrink-0' />
                                <div>
                                    <p className='text-[10px] sm:text-xs font-medium text-black'>Secure Payment</p>
                                    <p className='text-[9px] sm:text-[10px] text-gray-500'>100% secure</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-2 sm:gap-3'>
                                <IoStorefrontOutline size={20} className='text-gray-700 flex-shrink-0' />
                                <div>
                                    <p className='text-[10px] sm:text-xs font-medium text-black'>Quality Assured</p>
                                    <p className='text-[9px] sm:text-[10px] text-gray-500'>Handpicked</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 flex-wrap'>
                            <span className='text-[10px] sm:text-xs text-gray-500'>Tags:</span>
                            {tags?.map((tag, index) => (
                                <Link
                                    key={index}
                                    to={`/shop?tag=${tag}`}
                                    className='uppercase text-[10px] sm:text-xs text-gray-600 bg-gray-100 px-2 py-1 hover:bg-black hover:text-white transition-colors'
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='bg-gray-50'>
                <div className='lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-8 sm:py-10 lg:py-12'>
                    {/* Tab Headers */}
                    <div className='flex justify-center gap-4 sm:gap-6 lg:gap-8 border-b border-gray-200 mb-6 sm:mb-8'>
                        {['description', 'details', 'reviews'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-3 sm:pb-4 text-[10px] sm:text-xs lg:text-sm font-medium tracking-wider uppercase transition-colors relative ${activeTab === tab ? 'text-black' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId='activeTab'
                                        className='absolute bottom-0 left-0 right-0 h-0.5 bg-black'
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className='max-w-3xl mx-auto'
                        >
                            {activeTab === 'description' && (
                                <div className='prose prose-sm max-w-none'>
                                    <p className='text-xs sm:text-sm text-gray-600 leading-relaxed text-center'>
                                        {description}
                                    </p>
                                </div>
                            )}

                            {activeTab === 'details' && (
                                <div className='grid grid-cols-2 gap-3 sm:gap-4'>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Category</span>
                                        <p className='text-xs sm:text-sm font-medium text-black capitalize'>{category}</p>
                                    </div>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Type</span>
                                        <p className='text-xs sm:text-sm font-medium text-black capitalize'>{subcategory}</p>
                                    </div>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Material</span>
                                        <p className='text-xs sm:text-sm font-medium text-black'>Premium Alloy</p>
                                    </div>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Finish</span>
                                        <p className='text-xs sm:text-sm font-medium text-black'>Polished</p>
                                    </div>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Size</span>
                                        <p className='text-xs sm:text-sm font-medium text-black'>{availableSizes?.join(', ')}</p>
                                    </div>
                                    <div className='bg-white p-3 sm:p-4'>
                                        <span className='text-[10px] sm:text-xs text-gray-500'>Care</span>
                                        <p className='text-xs sm:text-sm font-medium text-black'>Keep dry</p>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className='space-y-4 sm:space-y-6'>
                                    {/* Review Summary */}
                                    <div className='text-center mb-6 sm:mb-8'>
                                        <div className='text-3xl sm:text-4xl font-bold text-black mb-2'>4.8</div>
                                        <div className='flex items-center justify-center gap-1 mb-2'>
                                            {[...Array(5)].map((_, i) => (
                                                <IoStar key={i} className='text-black' size={14} />
                                            ))}
                                        </div>
                                        <p className='text-[10px] sm:text-xs text-gray-500'>Based on 24 reviews</p>
                                    </div>

                                    {/* Reviews */}
                                    {[1, 2, 3].map((_, index) => (
                                        <div key={index} className='bg-white p-4 sm:p-6 space-y-2 sm:space-y-3'>
                                            <div className='flex items-center justify-between'>
                                                <div className='flex items-center gap-2 sm:gap-3'>
                                                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold'>
                                                        {['S', 'M', 'A'][index]}
                                                    </div>
                                                    <div>
                                                        <p className='text-xs sm:text-sm font-medium'>
                                                            {['Sarah K.', 'Mira R.', 'Ayesha T.'][index]}
                                                        </p>
                                                        <p className='text-[9px] sm:text-[10px] text-gray-500'>Verified Buyer</p>
                                                    </div>
                                                </div>
                                                <div className='flex items-center gap-0.5'>
                                                    {[...Array(5)].map((_, i) => (
                                                        <IoStar key={i} className='text-black' size={10} />
                                                    ))}
                                                </div>
                                            </div>
                                            <p className='text-[11px] sm:text-sm text-gray-600'>
                                                {[
                                                    'Absolutely love this piece! Amazing quality for the price.',
                                                    'Beautiful design and fast shipping. Highly recommend!',
                                                    'Perfect gift for my sister. Great packaging too.'
                                                ][index]}
                                            </p>
                                            <p className='text-[9px] sm:text-[10px] text-gray-400'>
                                                {['2 days ago', '1 week ago', '2 weeks ago'][index]}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {relatedProducts.length > 0 && (
                <div className='lg:max-w-7xl mx-auto px-4 md:px-6 lg:px-0 py-10 sm:py-12 lg:py-16'>
                    <div className='text-center mb-8 sm:mb-10 lg:mb-12'>
                        <p className='text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-gray-500 mb-2 sm:mb-3 uppercase'>You May Also Like</p>
                        <h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-black mb-3 sm:mb-4'>Related Products</h2>
                        <div className='w-12 sm:w-16 h-0.5 bg-black mx-auto'></div>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6'>
                        {relatedProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}

            <div className='sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]'>
                <div className='flex items-center gap-3'>
                    <div className='flex-1 min-w-0'>
                        <p className='text-[10px] text-gray-500 truncate'>{name}</p>
                        <div className='flex items-center gap-2'>
                            <span className='text-base font-bold'>৳{price}</span>
                            {hasDiscount && (
                                <span className='text-[10px] text-gray-400 line-through'>৳{originalPrice}</span>
                            )}
                        </div>
                    </div>
                    <button className='bg-black text-white px-5 py-2.5 text-xs font-bold flex items-center gap-1.5 flex-shrink-0'>
                        <TbShoppingCartPlus size={16} />
                        ADD
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {showSizeGuide && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4'
                        onClick={() => setShowSizeGuide(false)}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className='bg-white p-5 sm:p-6 max-w-sm w-full mx-4'>
                            <h3 className='text-base sm:text-lg font-bold mb-4'>Ring Size Guide</h3>
                            <div className='space-y-3 text-xs sm:text-sm text-gray-600'>
                                <p>Our rings are adjustable and fit most finger sizes.</p>
                                <div className='bg-gray-50 p-3'>
                                    <span className='font-medium'>Adjustable</span>
                                    <span className='block text-gray-500 text-[11px] sm:text-xs'>Fits sizes 5-9</span>
                                </div>
                            </div>
                            <button
                                onClick={() => setShowSizeGuide(false)}
                                className='mt-5 sm:mt-6 w-full bg-black text-white py-2.5 sm:py-3 text-xs sm:text-sm font-bold'>
                                CLOSE
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const ProductPageSkeleton = () => {
    return (
        <div className='bg-white'>
            <div className='border-b border-gray-100'>
                <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-3 sm:py-4'>
                    <div className='h-3 sm:h-4 w-48 sm:w-64 bg-gray-200 rounded animate-pulse'></div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 sm:py-8 lg:py-12'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16'>
                    {/* Image Skeleton */}
                    <div className='space-y-3 sm:space-y-4'>
                        <div className='aspect-square bg-gray-200 relative overflow-hidden'>
                            <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                        </div>
                        <div className='grid grid-cols-4 gap-2 sm:gap-3'>
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className='aspect-square bg-gray-200 relative overflow-hidden'>
                                    <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Info Skeleton */}
                    <div className='space-y-4 sm:space-y-5 lg:space-y-6'>
                        <div className='h-3 w-24 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-6 sm:h-8 w-3/4 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-3 w-32 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-12 sm:h-16 w-full bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-8 sm:h-10 w-40 bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-px bg-gray-200'></div>
                        <div className='h-10 sm:h-12 w-full bg-gray-200 rounded animate-pulse'></div>
                        <div className='h-10 sm:h-12 w-32 bg-gray-200 rounded animate-pulse'></div>
                        <div className='flex gap-3'>
                            <div className='h-12 sm:h-14 flex-1 bg-gray-200 rounded animate-pulse'></div>
                            <div className='h-12 sm:h-14 flex-1 bg-gray-200 rounded animate-pulse'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;