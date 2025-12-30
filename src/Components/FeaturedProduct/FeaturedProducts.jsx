import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import ProductCard from '../../Components/Reuseable/ProductCard';

const FeaturedProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
                setLoading(false);
            });
    }, []);

    // Get first 8 products for featured section
    const featuredProducts = products.slice(0, 8);

    if (loading) {
        return (
            <section>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6'>
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className='animate-pulse'>
                            <div className='aspect-square bg-gray-200 mb-4'></div>
                            <div className='h-4 bg-gray-200 rounded mb-2'></div>
                            <div className='h-3 bg-gray-200 rounded w-2/3'></div>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section>
            {/* Section Header */}
            <div className='text-center mb-12 lg:mb-16'>
                <p className='text-xs tracking-[0.3em] text-gray-500 mb-3 uppercase'>
                    Curated For You
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4'>
                    Featured Collection
                </h2>
                <div className='w-16 h-0.5 bg-black mx-auto'></div>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6'>
                {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            {/* View All Button */}
            <div className='text-center mt-12 lg:mt-16'>
                <Link
                    to="/shop"
                    className='inline-block border-2 border-black text-black px-10 py-3 text-sm font-bold tracking-wider hover:bg-black hover:text-white transition-all duration-300'
                >
                    VIEW ALL PRODUCTS
                </Link>
            </div>
        </section>
    );
};

export default FeaturedProducts;