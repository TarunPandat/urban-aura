/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useMemo, useState } from 'react'
import Categories from '../_constants/categories'
import Tag from '../_components/Tag'
import { FiSearch } from 'react-icons/fi'
import ProductCard from '../_components/ProductCard'
import { products } from '../_constants/products'
import FuzzySearch from 'fuzzy-search'
import Head from 'next/head'

function Shop() {
    const [selectedCat, setSelectedCat] = useState<string[]>([])

    const [search, setSearch] = useState('')

    const onSelectCat = (cat: string) => {
        if (selectedCat.includes(cat)) {
            const index = selectedCat.findIndex((i: string) => i === cat)
            const cats = [...selectedCat]
            cats.splice(index, 1)
            setSelectedCat(cats)
        } else {
            setSelectedCat((cats) => [...cats, cat])
        }
    }

    const searcher = new FuzzySearch(
        products,
        ['name', 'category', 'sku', 'brand', 'description', 'color'],
        {
            caseSensitive: false,
        }
    )

    const searchedProducts = searcher.search(search)

    const filterProducts = useMemo(() => {
        if (selectedCat?.length)
            return searchedProducts?.filter((i: any) =>
                selectedCat?.includes(i?.category)
            )
        return searchedProducts
    }, [searchedProducts, selectedCat])

    return (
        <>
            <Head>
                <title>About Us | Urban Aura</title>
                <meta
                    name="description"
                    content="Learn more about Urban Aura - our story, mission, and values."
                />
            </Head>
            <div>
                <div className="flex flex-col">
                    <div className="flex w-full justify-center">
                        <div className="flex flex-col">
                            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-full px-4 py-2 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="bg-black text-white px-4 py-2"
                                >
                                    <FiSearch />
                                </button>
                            </div>
                            <div className="flex mt-5">
                                {Categories?.map((cat) => (
                                    <Tag
                                        key={cat}
                                        label={cat}
                                        isActive={selectedCat.includes(cat)}
                                        onClick={() => onSelectCat(cat)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className="mt-10 flex flex-col w-full">
                            <div className="my-5 text-2xl font-bold">
                                Products
                            </div>
                            <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
                                {filterProducts.map((i: any) => (
                                    <ProductCard
                                        key={i?.id}
                                        image={i?.image}
                                        name={i?.name}
                                        price={i?.price}
                                        product={i}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
