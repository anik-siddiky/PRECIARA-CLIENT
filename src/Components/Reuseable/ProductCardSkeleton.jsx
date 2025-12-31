import React from 'react';

const ProductCardSkeleton = () => {
    return (
        <div className='relative'>
            <div className='relative bg-white overflow-hidden'>
                {/* Image Skeleton */}
                <div className='relative aspect-3/4 bg-gray-200 overflow-hidden'>
                    <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>

                    {/* Badge Skeleton */}
                    <div className='absolute top-2 left-2 sm:top-3 sm:left-3'>
                        <div className='h-4 sm:h-5 w-10 sm:w-12 bg-gray-300 overflow-hidden relative'>
                            <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300'></div>
                        </div>
                    </div>

                    {/* Wishlist Skeleton */}
                    <div className='absolute top-2 right-2 sm:top-3 sm:right-3 w-8 h-8 sm:w-9 sm:h-9 bg-gray-300 rounded-full sm:rounded-none overflow-hidden relative'>
                        <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300'></div>
                    </div>

                    {/* Category Skeleton - Desktop only */}
                    <div className='hidden sm:block absolute bottom-3 left-3'>
                        <div className='h-5 w-14 bg-gray-300 overflow-hidden relative'>
                            <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300'></div>
                        </div>
                    </div>
                </div>

                {/* Product Info */}
                <div className='p-3 sm:p-4'>
                    {/* Title */}
                    <div className='relative h-3 sm:h-4 bg-gray-200 w-4/5 mb-1 overflow-hidden'>
                        <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                    </div>

                    {/* Description */}
                    <div className='relative h-2.5 sm:h-3 bg-gray-200 w-full mb-2 sm:mb-3 overflow-hidden'>
                        <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                    </div>

                    {/* Price Row */}
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1.5 sm:gap-2'>
                            {/* Price */}
                            <div className='relative h-3 sm:h-4 w-10 sm:w-12 bg-gray-200 overflow-hidden'>
                                <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                            </div>
                            {/* Original Price */}
                            <div className='relative h-2.5 sm:h-3 w-8 sm:w-10 bg-gray-100 overflow-hidden'>
                                <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-100 via-white to-gray-100'></div>
                            </div>
                        </div>

                        {/* Rating Dots - Desktop only */}
                        <div className='hidden sm:flex gap-0.5'>
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className='w-1 h-1 bg-gray-200'></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Add Button Skeleton */}
                <div className='sm:hidden px-3 pb-3'>
                    <div className='relative w-full h-9 bg-gray-200 overflow-hidden'>
                        <div className='absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-gray-200 via-white to-gray-200'></div>
                    </div>
                </div>

                {/* Bottom Line */}
                <div className='h-0.5 bg-gray-100'></div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;