import React, { useContext, useEffect } from 'react'
import PageWrapper from '../Components/Wrapper & Card/PageWrapper'
import Product from '../Components/Product/Product'
import InputButton from '../Components/INPUT/InputButton'
import StoreContext from '../Context/StoreContext'

function Shop() {
    const StoreCTX = useContext(StoreContext)


    // FETCH STORE PRODUCT
    useEffect(() => {
        StoreCTX.fetchProductList()
    }, [])




    return (
        <PageWrapper className=" flex flex-col gap-2">
            <div className=' px-5 grid text-white grid-cols-6 bg-zinc-600 h-10 items-center'>
                <p>Name</p>
                <p>Description</p>
                <p>Price</p>
                <p>Stock</p>
                <p>Modification</p>
                <div className=' flex gap-5  text-white'>
                    <InputButton placeHolder="BUY 5" className="h-full opacity-100 cursor-default " />
                    <InputButton placeHolder="BUY 5" className="h-full opacity-100 cursor-default " />
                    <InputButton placeHolder="BUY 5" className="h-full opacity-100 cursor-default " />
                </div>
            </div>

            <div className='  bg-slate-200 flex flex-col gap-1'>
                {
                    StoreCTX.productList.map((item) => <Product key={item.productId} data={item} />)
                }
            </div>
        </PageWrapper>
    )
}

export default Shop