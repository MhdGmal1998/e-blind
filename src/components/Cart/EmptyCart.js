import React from 'react'
import '../../index.css'
export default function EmptyCart() {

    const he = window.innerHeight;
   
    return (
        <div className="container2" style={{
            height:he,
            alignItems:'center'
        }}>
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1 style={{
                        marginTop:he/2,
                        fontWeight:'800',
                        color:'red'
                    }}>Your cart is currently empty</h1>
                </div>
            </div>
        </div>
    )
}
