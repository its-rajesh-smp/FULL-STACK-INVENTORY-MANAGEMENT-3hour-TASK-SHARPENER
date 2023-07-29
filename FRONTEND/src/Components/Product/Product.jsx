import React, { useContext, useState } from "react";
import InputButton from "../INPUT/InputButton";
import StoreContext from "../../Context/StoreContext";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai"
import ModificationForm from "../AddProductForm/ModificationForm";

function Product({ data }) {
    const StoreCTX = useContext(StoreContext);

    const [name, setName] = useState(data.name);
    const [description, setDescription] = useState(data.description);
    const [price, setPrice] = useState(data.price);
    const [stock, setStock] = useState(data.stock);

    const [editForm, showEditForm] = useState(false);

    /* -------------------------------------------------------------------------- */
    /*                             BUY BUTTON HANDELER                            */
    /* -------------------------------------------------------------------------- */
    const buyButtonHandeler = (quantity) => {
        if (stock !== 0) {
            StoreCTX.buyProduct(data.productId, stock, quantity, setStock);
        }
    };



    // SHOW EDIT FORM ON CLICK EDIT
    const handelEditForm = () => {
        showEditForm((p) => !p);
    };


    /* -------------------------------------------------------------------------- */
    /*                                HANDEL DELETE                               */
    /* -------------------------------------------------------------------------- */
    const deleteButtonHandeler = () => {
        StoreCTX.deleteProduct(data.productId)
    }

    return (
        <>
            <div className=" px-5 grid text-black  grid-cols-productGrid bg-white  h-20 items-center">
                <p>{name}</p>
                <p>{description}</p>
                <p>{price}</p>
                <p>{stock}</p>

                <div className=" text-2xl flex gap-4">
                    <FiEdit onClick={handelEditForm} className=" text-blue-600 cursor-pointer" />
                    <AiOutlineDelete onClick={deleteButtonHandeler} className=" text-red-600 cursor-pointer" />
                </div>

                <div className=" flex gap-3 justify-between text-white">
                    {stock >= 1 && (
                        <InputButton
                            onClick={() => {
                                buyButtonHandeler(1);
                            }}
                            placeHolder="BUY 1"
                            className="h-10 text-black bg-gray-500"
                        />
                    )}
                    {stock >= 3 && (
                        <InputButton
                            onClick={() => {
                                buyButtonHandeler(3);
                            }}
                            placeHolder="BUY 3"
                            className="h-10 text-black bg-gray-500"
                        />
                    )}
                    {stock >= 5 && (
                        <InputButton
                            onClick={() => {
                                buyButtonHandeler(5);
                            }}
                            placeHolder="BUY 5"
                            className="h-10 text-black bg-gray-500"
                        />
                    )}
                </div>
            </div>

            {editForm && (
                <ModificationForm
                    id={data.productId}
                    name={name}
                    price={price}
                    stock={stock}
                    description={description}
                    setName={setName}
                    setPrice={setPrice}
                    setDescription={setDescription}
                    setStock={setStock}
                    handelEditForm={handelEditForm}
                />
            )}
        </>
    );
}

export default Product;
