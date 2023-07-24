import React, { useContext, useState } from 'react'
import InputButton from '../INPUT/InputButton'
import StoreContext from '../../Context/StoreContext'

function Product({ data }) {
    const StoreCTX = useContext(StoreContext)
    const [stock, setStock] = useState(data.stock)


    /* -------------------------------------------------------------------------- */
    /*                             BUY BUTTON HANDELER                            */
    /* -------------------------------------------------------------------------- */
    const buyButtonHandeler = (quantity) => {
        if (stock !== 0) {
            StoreCTX.updateProductStock(data.productId, stock, quantity, setStock)
        }
    }




    return (
        <div className=' px-5 grid text-black grid-cols-5 bg-white  h-20 items-center'>
            <p>{data.name}</p>
            <p>{data.description}</p>
            <p>{data.price}</p>
            <p>{stock}</p>
            <div className=' flex gap-5  text-white'>


                {stock - 1 >= 0 && <InputButton onClick={() => { buyButtonHandeler(1) }} placeHolder="BUY 1" className="h-10 text-black bg-gray-500" />}
                {stock - 3 >= 0 && <InputButton onClick={() => { buyButtonHandeler(3) }} placeHolder="BUY 3" className="h-10 text-black bg-gray-500" />}
                {stock - 5 >= 0 && <InputButton onClick={() => { buyButtonHandeler(5) }} placeHolder="BUY 5" className="h-10 text-black bg-gray-500" />}


            </div>
        </div>
    )
}

export default Product