'use client'

import React from 'react'
import ProductCard from './_components/ProductCard'
import { products } from './_constants/products'

function Home() {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="row-span-2 col-span-2">
                    <ProductCard
                        image={products[4]?.image}
                        name={products[4]?.name}
                        price={products[4]?.price}
                        product={products[4]}
                    />
                </div>
                <ProductCard
                    image={products[5]?.image}
                    name={products[5]?.name}
                    price={products[5]?.price}
                    product={products[5]}
                />
                <ProductCard
                    image={products[9]?.image}
                    name={products[9]?.name}
                    price={products[9]?.price}
                    product={products[9]}
                />
            </div>
            <div className="mt-10">
                <div className="my-5 text-2xl font-bold">Products</div>
                <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                    {products.map((i, _) => (
                        <ProductCard
                            key={_}
                            image={i?.image}
                            name={i?.name}
                            price={i?.price}
                            product={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home
