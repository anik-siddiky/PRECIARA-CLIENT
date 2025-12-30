import React, { useState } from 'react';
import { Link } from 'react-router';
import { IoHeartOutline, IoHeart, IoEyeOutline, IoBagAddOutline } from 'react-icons/io5';

const ProductCard = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

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
        setIsWishlisted(!isWishlisted);
    };

    return (
        <div className='group relative cursor-pointer'>
            <div className='relative bg-white overflow-hidden transition-all duration-500 group-hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]'>
                <div className='relative aspect-3/4 overflow-hidden bg-gray-50'>
                    <Link to={`/product/${slug}`}>
                        <img
                            src={image}
                            alt={name}
                            className='w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105'
                        />
                    </Link>
                    <div className='absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500'></div>
                    <div className='absolute top-3 left-3 flex flex-col gap-2'>
                        {hasDiscount && (
                            <span className='bg-black text-white text-[9px] font-bold px-2.5 py-1 tracking-wide'>
                                −{discount}%
                            </span>
                        )}
                        {isNewArrival && (
                            <span className='flex items-center gap-2 bg-white text-black text-[9px] font-bold px-4 py-2 tracking-widest rounded-full border border-gray-200 shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] transition-all duration-500'>
                                <span className='w-2 h-2 rounded-full bg-gradient-to-br from-gray-600 to-black animate-pulse'></span>
                                NEW
                            </span>
                        )}
                        {isBestSeller && !isNewArrival && (
                            <span className='flex items-center gap-2 bg-black text-white text-[9px] font-bold px-4 py-2 tracking-widest rounded-full shadow-[0_0_15px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,0,0,0.5)] transition-all duration-500'>
                                <span className='w-2 h-2 rounded-full bg-gradient-to-br from-gray-300 to-white animate-pulse'></span>
                                BEST
                            </span>
                        )}
                    </div>
                    <button
                        onClick={handleWishlist}
                        className='absolute top-3 right-3 w-9 h-9 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 cursor-pointer'
                    >
                        {isWishlisted ? (
                            <IoHeart className='text-black' size={25} />
                        ) : (
                            <IoHeartOutline className='text-gray-700' size={25} />
                        )}
                    </button>
                    <div className='absolute bottom-3 left-3 right-3 flex gap-2 translate-y-16 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out'>
                        <Link
                            to={`/product/${slug}`}
                            className='flex-1 bg-white text-black text-[10px] font-bold py-2.5 flex items-center justify-center gap-1.5 shadow-md hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <IoEyeOutline size={14} />
                            <span>VIEW</span>
                        </Link>
                        <button className='flex-1 bg-black text-white text-[10px] font-bold py-2.5 flex items-center justify-center gap-1.5 shadow-md hover:bg-gray-900 transition-all duration-300 cursor-pointer'>
                            <IoBagAddOutline size={14} />
                            <span>ADD</span>
                        </button>
                    </div>
                    <div className='absolute bottom-3 left-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300'>
                        <span className='bg-white text-gray-600 text-[9px] font-medium px-2.5 py-1 capitalize shadow-sm'>
                            {category}
                        </span>
                    </div>
                </div>
                <div className='p-4'>
                    <Link to={`/product/${slug}`}>
                        <h3 className='text-sm font-medium text-gray-900 mb-1 line-clamp-1 group-hover:text-black transition-colors duration-300'>
                            {name}
                        </h3>
                    </Link>
                    <p className='text-[10px] text-gray-400 mb-3 line-clamp-1'>
                        {shortDescription}
                    </p>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <span className='text-sm font-bold text-black'>
                                ৳{price}
                            </span>
                            {hasDiscount && (
                                <span className='text-[10px] text-gray-400 line-through'>
                                    ৳{originalPrice}
                                </span>
                            )}
                        </div>
                        <div className='flex gap-0.5'>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                            <span className='w-1 h-1 bg-black'></span>
                        </div>
                    </div>
                </div>
                <div className='h-0.5 bg-gray-100'>
                    <div className='h-full w-0 bg-black group-hover:w-full transition-all duration-500 ease-out'></div>
                </div>
            </div>
            <div className='absolute -bottom-2 left-3 right-3 h-6 bg-black/5 blur-lg -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
        </div>
    );
};

export default ProductCard;