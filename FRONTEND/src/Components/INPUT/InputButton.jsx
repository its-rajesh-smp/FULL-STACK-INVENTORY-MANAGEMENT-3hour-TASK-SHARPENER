import React from 'react'

function InputButton({ placeHolder, icon, className, onClick }) {
    return (
        <button onClick={onClick} className={` ${className && className} w-full  opacity-70 hover:opacity-100 transition-all rounded-xl   font-semibold`}>{placeHolder} {icon}</button>
    )
}

export default InputButton