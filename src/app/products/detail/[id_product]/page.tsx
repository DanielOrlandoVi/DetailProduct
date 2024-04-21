"use client";

import { MainLayout } from "@/layouts";
import { useParams } from "next/navigation";
import { getProduct } from '@/services/prodcts'
import { FakeProduct } from '@/types/fakeProduct'
import React, { useEffect, useState } from 'react'

export default function ProductDetail() {
    const params = useParams();
    const {id_product} = params;
    console.log(id_product)

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [product, setProduct] = useState<FakeProduct | null>(null);

    function getProductFunc() {
        getProduct(id_product).then((res) => {
          setProduct(res.data)
          setIsLoading(false)
        }).catch((err) => {
          console.log(err)
          setIsLoading(false)
        })
      }   

      useEffect(() => {
        getProductFunc()
      }, [])

    return (
        <MainLayout>
            <div>
            {product && (
              <>
            <div className="grid grid-cols-2  gap-10 m-4 "> 
            <div className="relative w-full h-full md:w-[520px] md:h-[560px] rounded-lg overflow-hidden">
                <img src={product.image} alt={product.title} className="object-contain w-full h-full"/>
            </div>

                <div className="flex flex-col items-start justify-center text-black tracking-[1px]">      
                    <h1 className="text-[30px] font-bold">{product.title}</h1>
                    <h1><br></br></h1>                
                    <h1 className="text-[20px]">ID: {product.id}</h1>                
                    <h1 className="text-[20px]">Category: {product.category} </h1>
                    <h1><br></br></h1>                
                    <h1>{product.description}</h1>
                    <h1><br></br></h1>
                    <h1 className="text-[25px] font-bold">${product.price} USD</h1>
                    <h1>Rating: {product.rating.rate} ({product.rating.count} Reviews)</h1>

                </div>

            </div>
              </>
            )}
            </div>
        </MainLayout>
    )
}