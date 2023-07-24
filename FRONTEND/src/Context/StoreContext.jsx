import React, { useState } from 'react';
import Axios from "axios"


const StoreContext = React.createContext({
    databaseAddHandeler: () => { },
    databaseFetchProductList: () => { },
    productList: [],
    updateProductStock: () => { }
})




export const StoreContextProvider = ({ children }) => {

    const [productList, setProductList] = useState([])

    /* -------------------------------------------------------------------------- */
    /*                              STORE IN DATABASE                             */
    /* -------------------------------------------------------------------------- */
    const databaseAddHandeler = async (productObj, closeForm) => {
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
    const databaseFetchProductList = async () => {
        try {
            const { data: response } = await Axios.post("http://localhost:5000/get")
            setProductList(response)
        } catch (error) {
            console.log(error);
        }
    }



    const updateProductStock = async (productId, stock, quantity, setStock) => {
        try {
            await Axios.post("http://localhost:5000/update", { productId, updatedStock: stock - quantity })
            setStock(p => p - quantity)

        } catch (error) {
            console.log(error);
        }
    }





    return (
        <StoreContext.Provider value={{ databaseAddHandeler, databaseFetchProductList, productList, updateProductStock }}>
            {children}
        </StoreContext.Provider>
    )
}





export default StoreContext