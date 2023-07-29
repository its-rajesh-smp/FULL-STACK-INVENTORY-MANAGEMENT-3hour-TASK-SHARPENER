import React, { useContext, useState } from 'react'
import BlurWrapper from '../Wrapper & Card/BlurWrapper'
import InputText from '../INPUT/InputText'
import InputButton from '../INPUT/InputButton'
import { MdClose } from 'react-icons/md'
import HeaderContext from '../../Context/HeaderContext'
import StoreContext from '../../Context/StoreContext'

function AddProductForm() {
    const HeaderCtx = useContext(HeaderContext)
    const StoreCTX = useContext(StoreContext)

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")


    /* -------------------------------------------------------------------------- */
    /*                     // CLOSE ADD PRODUCT FORM HANDELER                     */
    /* -------------------------------------------------------------------------- */
    const closeAddProductFormHandeler = () => {
        HeaderCtx.setAddProductCard(false)
    }


    /* -------------------------------------------------------------------------- */
    /*                         SENDING PRODUCT TO CONTEXT                         */
    /* -------------------------------------------------------------------------- */
    const storeProductHandeler = (e) => {
        e.preventDefault()

        if (name === "" || description === "") {
            alert("ADD NOT POSSIBLE EMPTY FIELD")
            return
        }

        const productObj = {
            name, description, price: Number(price), stock: Number(stock)
        }
        StoreCTX.addProduct(productObj, closeAddProductFormHandeler)
    }



    return (
        <BlurWrapper className=" flex justify-center items-center">
            <form className='p-5 w-2/4 flex flex-col gap-5 bg-white shadow-xl rounded-2xl'>
                <div className=' justify-between flex items-center'>
                    <h1 className='text-2xl font-bold'>ADD PRODUCT</h1>
                    <MdClose onClick={closeAddProductFormHandeler} className=' cursor-pointer text-3xl' />
                </div>
                <div className='flex flex-col gap-2'>
                    <InputText onChange={setName} value={name} placeHolder="Name" className=" h-12" />
                    <InputText onChange={setDescription} value={description} placeHolder="Description" className=" h-12" />
                    <InputText type="number" onChange={setPrice} value={price} placeHolder="Price" className=" h-12" />
                    <InputText type="number" onChange={setStock} value={stock} placeHolder="Quantity" className=" h-12" />

                </div>
                <InputButton onClick={storeProductHandeler} placeHolder="Add Product" className="h-12 text-white bg-gray-800" />
            </form>
        </BlurWrapper>
    )
}

export default AddProductForm