/* eslint-disable @typescript-eslint/no-explicit-any */
// components/ProductCard.tsx

'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface ProductCardProps {
    image: string
    name: string
    price: number | string
    size?: 'sm' | 'md' | 'lg' | 'full'
    className?: string
    product: any
}

const sizeMap = {
    sm: 'w-40',
    md: 'w-60',
    lg: 'w-80',
    full: 'w-full',
}

export default function ProductCard({
    image,
    name,
    price,
    size = 'full',
    className,
    product,
}: ProductCardProps) {
    const router = useRouter()

    const onClickProduct = () => router.push(`/shop/${product?.sku}`)

    return (
        <div
            className={`${sizeMap[size]} bg-black min-h-[300px] w-full h-full rounded-md shadow-md overflow-hidden hover:scale-[1.02] transition-all cursor-pointer ${className}`}
            onClick={onClickProduct}
        >
            <div className="relative h-[70%] w-full">
                <Image
                    src={image}
                    alt={name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-2xl"
                />
            </div>
            <div className="p-4 h-[30%]">
                <h3 className="text-lg font-semibold text-white truncate">
                    {name}
                </h3>
                <p className="text-white font-bold mt-1">₹{price}</p>
            </div>
        </div>
    )
}
