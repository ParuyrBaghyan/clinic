import React, { useState } from 'react'
import { priceList } from '../components/PriceList'
import { useContext } from 'react'
import { Context } from "../components/Context";
import Counter from '../components/Counter';

export default function PricesPage() {
    const $ = useContext(Context);

    // const [price,setPrice] = useState()

    // console.log(addedList)
    return (
        <div className='pricesPage-container'>
            <a href="#total" className="up">Դեպի զամբյուղ</a>
            <h2>Գնացուցակ</h2>

            <div className="reserches">
                <div className="reserch-container">
                    {priceList.map(res => {
                        return <div className="reserch-div" key={Math.random()}>
                            <p>{res.reserch}</p>
                            <span>{res.price}դր</span>
                            <button onClick={(e) => {
                                if (!$.addedList.includes(res)) {
                                    $.setAddedList([...$.addedList, res]);
                                    if ($.addedList.includes(res)) {
                                        $.setTotal($.total + res.data)
                                    } else {
                                        $.setTotal($.total + res.data * res.quantity)
                                    }
                                }
                            }}>+</button>
                        </div>
                    })}
                </div>
                <div className="cx">
                    <div className="total-div">
                        <div className="counter-header" id='total'>
                            <p>Ծառայության հաշվիչ</p>
                            <button onClick={() => {
                                $.setAddedList([])
                                $.setTotal(0)
                            }}>Մաքրել</button>
                        </div>
                        <div className="sections">

                            <p>Ծառայություն</p>
                            <p>Քանակ</p>
                            <p>Գին</p>
                        </div>
                        <div className="added">
                            {$.addedList.map(selected => {
                                return <div className="selected-div" key={Math.random()}>
                                    <span>{selected.reserch}</span>
                                    <Counter selected={selected} />
                                    <p>{selected.data * selected.quantity}</p>
                                    <div className="remove" onClick={(e) => {
                                        $.setAddedList([...$.addedList.filter(item => item.reserch !== selected.reserch)])
                                        $.setTotal($.total - selected.data * selected.quantity)
                                    }}><p>-</p></div>
                                </div>
                            })}
                        </div>
                        <div className="all-total">
                            <p>Ընդհանուր {$.total} դր</p>
                        </div>
                    </div>
                    <div className="xz"></div>
                </div>
            </div>
        </div>
    )
}
