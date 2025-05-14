/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { AppState } from '@/lib/store'
import { useRouter } from 'next/navigation'
import React, { useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { getEmptyValueKeys } from '../_utils/funcs'
import { clearBag } from '@/lib/features/cartSlice'

export default function CheckoutPage() {
    const [form, setForm] = useState({
        values: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
        },
        errors: {
            name: '',
            email: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
        },
    })

    const onChange = ({ target: { name, value } }: any) => {
        setForm({ ...form, values: { ...form.values, [name]: value } })
    }

    const router = useRouter()

    const cart: any = useSelector((state: AppState) => state.cart)

    const dispatch = useDispatch()

    const subTotal = useMemo(() => {
        return cart?.reduce((r: number, p: any) => {
            r = r + p?.quantity * p?.price
            return r
        }, 0)
    }, [cart])

    const onConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        const res = getEmptyValueKeys(form?.values)
        if (res?.length) {
            const err = res?.reduce((r: any, i: any) => {
                r[i] = 'Required'
                return r
            }, {})
            setForm({ ...form, errors: { ...err } })
        } else {
            dispatch(clearBag())
            router?.replace('/thankyou')
        }
    }

    return (
        <>
            <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-6">
                        Checkout
                    </h1>

                    {/* Billing Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="John Doe"
                                onChange={onChange}
                                name="name"
                                value={form?.values?.name}
                            />
                            <p className="text-red-700">{form?.errors?.name}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="john@example.com"
                                onChange={onChange}
                                name="email"
                                value={form?.values?.email}
                            />
                            <p className="text-red-700">
                                {form?.errors?.email}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Address
                            </label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="123 Main Street"
                                onChange={onChange}
                                name="address"
                                value={form?.values?.address}
                            />
                            <p className="text-red-700">
                                {form?.errors?.address}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                City
                            </label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="New York"
                                onChange={onChange}
                                name="city"
                                value={form?.values?.city}
                            />
                            <p className="text-red-700">{form?.errors?.city}</p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                State
                            </label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="NY"
                                onChange={onChange}
                                name="state"
                                value={form?.values?.state}
                            />
                            <p className="text-red-700">
                                {form?.errors?.state}
                            </p>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                ZIP Code
                            </label>
                            <input
                                type="text"
                                className="text-black mt-1 block w-full border-gray-300 rounded-md h-10 placeholder:text-gray-400 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                placeholder="10001"
                                onChange={onChange}
                                name="pincode"
                                value={form?.values?.pincode}
                            />
                            <p className="text-red-700">
                                {form?.errors?.pincode}
                            </p>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                        <h2 className="text-lg font-medium text-gray-900 mb-4">
                            Order Summary
                        </h2>
                        <div className="flex justify-between text-sm text-gray-600">
                            <p>Subtotal</p>
                            <p>₹{subTotal}</p>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <p>Shipping</p>
                            <p>₹200</p>
                        </div>
                        <div className="flex justify-between text-base font-medium text-gray-900 mt-4">
                            <p>Total</p>
                            <p>₹{subTotal + 200}</p>
                        </div>

                        <p className="text-gray-500">Payment of delivery</p>

                        <button
                            onClick={onConfirm}
                            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition duration-150"
                        >
                            Confirm Order
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
