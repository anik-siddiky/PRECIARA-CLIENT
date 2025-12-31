import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { IoHeartOutline, IoHeart, IoEyeOutline } from 'react-icons/io5';
import { TbShoppingCartPlus } from 'react-icons/tb';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const navigate = useNavigate();

    const {
        name,
        slug,
        shortDescription,
        price,
        originalPrice,
        discount,
        image,
        tags,
        category
    } = product;

    const hasDiscount = discount > 0;
    const isBestSeller = tags?.includes('bestseller');
    const isNewArrival = tags?.includes('new arrival');

    const handleWishlist = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsWishlisted(!isWishlisted);
    };

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        // Add to cart logic here
        console.log('Added to cart:', name);
    };

    const handleCardClick = () => {
        navigate(`/product/${slug}`);
    };

    return (
        <div 
            className='group relative cursor-pointer'
            onClick={handleCardClick}
        >
            <div className='relative bg-white overflow-hidden transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]'>
                <div className='relative aspect-3/4 overflow-hidden bg-gray-50'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105'
                    />
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500'></div>

                    {/* Badges */}
                    <div className='absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5 sm:gap-2'>
                        {hasDiscount && (
                            <span className='bg-black text-white text-[8px] sm:text-[9px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1'>
                                −{discount}%
                            </span>
                        )}
                        {isNewArrival && (
                            <span className='flex items-center gap-1 sm:gap-2 bg-white text-black text-[8px] sm:text-[9px] font-bold px-2 sm:px-4 py-1 sm:py-2 tracking-wider sm:tracking-widest rounded-full border border-gray-200 shadow-[0_0_10px_rgba(0,0,0,0.08)] sm:shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
                                <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-gray-600 to-black animate-pulse'></span>
                                NEW
                            </span>
                        )}
                        {isBestSeller && !isNewArrival && (
                            <span className='flex items-center gap-1 sm:gap-2 bg-black text-white text-[8px] sm:text-[9px] font-bold px-2 sm:px-4 py-1 sm:py-2 tracking-wider sm:tracking-widest rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)] sm:shadow-[0_0_15px_rgba(0,0,0,0.3)]'>
                                <span className='w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-gray-300 to-white animate-pulse'></span>
                                BEST
                            </span>
                        )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                        onClick={handleWishlist}
                        className='absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-white/80 sm:bg-transparent flex items-center justify-center sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer rounded-full sm:rounded-none'
                    >
                        {isWishlisted ? (
                            <IoHeart className='text-black' size={20} />
                        ) : (
                            <IoHeartOutline className='text-gray-700' size={20} />
                        )}
                    </button>

                    {/* Desktop Hover Buttons */}
                    <div className='hidden sm:flex absolute bottom-3 left-3 right-3 gap-2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out'>
                        <div className='flex-1 bg-white text-black text-[10px] font-bold py-2.5 flex items-center justify-center gap-1.5 shadow-md'>
                            <IoEyeOutline size={14} />
                            <span>VIEW</span>
                        </div>
                        <button 
                            onClick={handleAddToCart}
                            className='flex-1 bg-black text-white text-[10px] font-bold py-2.5 flex items-center justify-center gap-1.5 shadow-md hover:bg-gray-900 transition-all duration-300 cursor-pointer'
                        >
                            <TbShoppingCartPlus size={14} />
                            <span>ADD</span>
                        </button>
                    </div>

                    {/* Category Tag */}
                    <div className='hidden sm:block absolute bottom-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                        <span className='uppercase bg-white text-gray-600 text-[9px] font-medium px-2.5 py-1 shadow-sm'>
                            {category}
                        </span>
                    </div>
                </div>

                {/* Product Info */}
                <div className='p-3 sm:p-4'>
                    <h3 className='text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-1 group-hover:text-black transition-colors duration-300'>
                        {name}
                    </h3>
                    <p className='text-[9px] sm:text-[10px] text-gray-400 mb-2 sm:mb-3 line-clamp-1'>
                        {shortDescription}
                    </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1.5 sm:gap-2'>
                            <span className='text-xs sm:text-sm font-bold text-black'>
                                ৳{price}
                            </span>
                            {hasDiscount && (
                                <span className='text-[9px] sm:text-[10px] text-gray-400 line-through'>
                                    ৳{originalPrice}
                                </span>
                            )}
                        </div>
                        <div className='hidden sm:flex gap-0.5'>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                        </div>
                    </div>
                </div>

                {/* Mobile Add to Cart Button */}
                <div className='sm:hidden px-3 pb-3'>
                    <button 
                        onClick={handleAddToCart}
                        className='w-full bg-black text-white text-[10px] font-bold py-2.5 flex items-center justify-center gap-1.5 active:bg-gray-800 transition-all duration-300'
                    >
                        <TbShoppingCartPlus size={14} />
                        <span>ADD TO CART</span>
                    </button>
                </div>

                {/* Bottom Line Animation */}
                <div className='h-0.5 bg-gray-100'>
                    <div className='h-full w-0 bg-black group-hover:w-full transition-all duration-500 ease-out'></div>
                </div>
            </div>

            {/* Shadow Effect */}
            <div className='absolute -bottom-2 left-3 right-3 h-6 bg-black/5 blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
    );
};

export default ProductCard;