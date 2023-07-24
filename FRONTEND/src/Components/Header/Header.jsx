import React, { useContext } from 'react'
import Brand from './UI/Brand'
import InputButton from '../INPUT/InputButton'
import HeaderContext from '../../Context/HeaderContext'

function Header() {
    const HeaderCtx = useContext(HeaderContext)


    return (
        <header className=' p-1 px-5 h-16 bg-gray-800 flex justify-between items-center w-screen'>
            <Brand />
            <InputButton onClick={() => { HeaderCtx.setAddProductCard(p => !p) }} placeHolder=" ADD PRODUCT" className=" w-40 h-10 bg-white " />
        </header>
    )
}

export default Header