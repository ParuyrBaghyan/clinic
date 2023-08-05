import React from 'react'
import { useState } from 'react';
import { useContext } from "react";
import { Context } from "./Context";

export default function Counter({ selected }) {
    const $ = useContext(Context)
    // const [count, setCount] = useState(0)

    return (
        <div className="quantity-div">
            <span onClick={() => {
                if (selected.quantity <= 1) {
                    $.setCount(selected.quantity = 1);
                }
                else {
                    $.setCount(selected.quantity -= 1);
                    $.setTotal($.total - selected.data)
                }
            }}>-</span>
            <span>{selected.quantity}</span>
            <span onClick={() => {
                $.setCount(selected.quantity += 1);
                if($.addedList.includes(selected)){
                $.setTotal($.total + selected.data)
                }else{
                    $.setTotal($.total + selected.data * selected.quantity)
                }
            }}>+</span>
        </div>
    )
}
