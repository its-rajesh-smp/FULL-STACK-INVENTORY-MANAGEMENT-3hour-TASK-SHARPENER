import React, { useState } from 'react';

const HeaderContext = React.createContext({
    addProductCard: false,
    setAddProductCard: () => { }
})


export const HeaderContextProvider = ({ children }) => {
    const [addProductCard, setAddProductCard] = useState(false)




    return (
        <HeaderContext.Provider value={{ addProductCard, setAddProductCard }}>
            {children}
        </HeaderContext.Provider>
    )
}


export default HeaderContext