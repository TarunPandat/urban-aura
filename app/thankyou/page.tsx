'use client'

import Link from 'next/link'
import { CiCircleCheck } from 'react-icons/ci'

export default function OrderConfirmedPage() {
    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white shadow-lg rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                    <CiCircleCheck className="text-green-500 w-16 h-16" />
                </div>
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                    Thank You!
                </h1>
                <p className="text-gray-600 mb-6">
                    Your order has been placed successfully. We’ve sent a
                    confirmation to your email.
                </p>
                <div className="border-t border-gray-200 pt-4">
                    <Link
                        href="/shop"
                        className="inline-block bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}
