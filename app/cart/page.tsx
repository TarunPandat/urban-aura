/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '@/lib/store'
import { useMemo } from 'react'
import { removeFromBag } from '@/lib/features/cartSlice'



export default function Cart() {

    const router = useRouter()

    const cart: any = useSelector((state: AppState) => state.cart)

    const dispatch = useDispatch()

    const subTotal = useMemo(() => {
        return cart?.reduce((r: number, p: any) => {
             r = r + p?.quantity * p?.price
            return r
        }, 0)
    }, [cart])

    const onRemoveFromCart = (index: number) => {
        dispatch(removeFromBag(index))
    }

  return (

              <div className="flex w-full h-full flex-col md:flex-row overflow-y-scroll bg-white shadow-xl rounded-md">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <p className="text-lg font-medium text-gray-900">Shopping cart</p>
                    <div className="ml-3 flex h-7 items-center">
                     
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cart.map((product: any, index: number) => (
                          <li key={`${product?.sku}-${product?.size}-${product?.color}`} className="flex py-6">
                            <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <Image alt={product.name} src={product.image} width={200} height={200} />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <Link href={`/shop/${product?.sku}`}>{product.name}</Link>
                                  </h3>
                                  <p className="ml-4">₹{product.price}</p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">color {product.color}</p>
                                <p className="mt-1 text-sm text-gray-500">size {product.size}</p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">Qty {product?.quantity}</p>

                                <div className="flex">
                                  <button type="button" onClick={() => onRemoveFromCart(index)} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{subTotal}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link
                      href="/checkout"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        onClick={() => router.push('/shop')}
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            
  )
}
