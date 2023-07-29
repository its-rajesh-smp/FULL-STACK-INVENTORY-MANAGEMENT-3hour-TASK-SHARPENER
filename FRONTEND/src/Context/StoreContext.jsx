import React, { useState } from 'react';
import Axios from "axios"


const StoreContext = React.createContext({
    addProduct: () => { },
    fetchProductList: () => { },
    productList: [],
    buyProduct: () => { },
    updateProduct: () => { }
})




export const StoreContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([])

    /* -------------------------------------------------------------------------- */
    /*                              STORE IN DATABASE                             */
    /* -------------------------------------------------------------------------- */
    const addProduct = async (productObj, closeForm) => {
        try {
            const { data: response } = await Axios.post("http://localhost:5000/add", productObj)
            setProductList(p => [response, ...p])
        } catch (error) {
            console.log(error);
        }
        closeForm()
    }


    /* -------------------------------------------------------------------------- */
    /*                             FETCH PRODUCT DATA                             */
    /* -------------------------------------------------------------------------- */
    const fetchProductList = async () => {
        try {
            const { data: response } = await Axios.post("http://localhost:5000/get")
            setProductList(response)
        } catch (error) {
            console.log(error);
        }
    }


    /* -------------------------------------------------------------------------- */
    /*                          BUY PRODUCT DEC QUANTITY                          */
    /* -------------------------------------------------------------------------- */
    const buyProduct = async (productId, stock, quantity, setStock) => {
        try {
            await Axios.post("http://localhost:5000/buy", { productId, updatedStock: stock - quantity })
            setStock(p => p - quantity)

        } catch (error) {
            console.log(error);
        }
    }



    const updateProduct = async (id, payload, setStock, setName, setPrice, setDescription, handelEditForm) => {
        try {
            const { data: dbRes } = await Axios.post("http://localhost:5000/update", { id, payload })

            setStock(payload.stock)
            setName(payload.name)
            setPrice(payload.price)
            setDescription(payload.description)
            setStock(payload.stock)
            handelEditForm()

        } catch (error) {
            console.log(error);
        }
    }




    return (
        <StoreContext.Provider value={{ addProduct, fetchProductList, productList, buyProduct, updateProduct }}>
            {children}
        </StoreContext.Provider>
    )
}





export default StoreContext