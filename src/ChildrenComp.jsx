import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct } from './todoSlice';

const ChildrenComp = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState("");

    const handleAdd = () => {
        dispatch(addProduct({ type: productName }));
        setProductName("");
    }
    const handleRemove = () => {
        dispatch(removeProduct({ type: productName }));
    }
    return (
        <div>
            <input style={{
                margin: "32px",
                fontSize: "32px"
            }} type="text"
                onChange={(e) => {
                    setProductName(e.target.value);
                }}
                placeholder='add products into the cart' />
            <button
                onClick={handleAdd}
                style={{
                    margin: "32px",
                    marginLeft: "0px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "32px"
                }} >Add</button>
            <button
                onClick={handleRemove}
                style={{
                    margin: "32px",
                    marginLeft: "0px",
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "32px"
                }} >Remove</button>
        </div>
    )
}

export default ChildrenComp
