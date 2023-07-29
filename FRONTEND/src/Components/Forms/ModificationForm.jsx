import React, { useContext, useState } from 'react'
import BlurWrapper from '../Wrapper & Card/BlurWrapper'
import InputText from '../INPUT/InputText'
import InputButton from '../INPUT/InputButton'
import { MdClose } from 'react-icons/md'
import StoreContext from '../../Context/StoreContext'

function ModificationForm({ id, name, description, price, stock, handelEditForm, setStock, setName, setPrice, setDescription }) {
    const StoreCTX = useContext(StoreContext);



    const [inpName, setInpName] = useState(name)
    const [inpDescription, setInpDescription] = useState(description)
    const [inpPrice, setInpPrice] = useState(price)
    const [inpStock, setInpStock] = useState(stock)


    // CLOSE EDIT FORM
    const closeModificationForm = () => {
        handelEditForm()
    }


    // ON CLICK SAVE | SAVE IN DATABASE
    const saveEditHandeler = (e) => {
        e.preventDefault()
        if (name === "" || description === "") {
            alert("EDIT NOT POSSIBLE EMPTY FIELD")
            return
        }

        const payload = {
            name: inpName,
            price: inpPrice,
            description: inpDescription,
            stock: inpStock
        }

        StoreCTX.updateProduct(id, payload, setStock, setName, setPrice, setDescription, handelEditForm)
    }




    return (
        <BlurWrapper className="flex justify-center items-center">
            <form className='p-5 w-2/4 flex flex-col gap-5 bg-white shadow-xl rounded-2xl'>
                <div className=' justify-between flex items-center'>
                    <h1 className='text-2xl font-bold'>EDIT PRODUCT -- ProductId:- {id}</h1>
                    <MdClose onClick={closeModificationForm} className=' cursor-pointer text-3xl' />
                </div>
                <div className='flex flex-col gap-2'>
                    <InputText onChange={setInpName} value={inpName} placeHolder="Name" className=" h-12" />
                    <InputText onChange={setInpDescription} value={inpDescription} placeHolder="Description" className=" h-12" />
                    <InputText type="number" onChange={setInpPrice} value={inpPrice} placeHolder="Price" className=" h-12" />
                    <InputText type="number" onChange={setInpStock} value={inpStock} placeHolder="Quantity" className=" h-12" />

                </div>

                <InputButton onClick={saveEditHandeler} placeHolder="Save" className="h-12 text-white bg-gray-800" />
            </form>
        </BlurWrapper>
    )
}

export default ModificationForm