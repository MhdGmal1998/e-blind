import React, { Component } from 'react'
import './../index.css'
import { useLocation } from 'react-router-dom';
export default () => {

    const he = window.innerHeight;
    const { pathname } = useLocation();
    return (
        <div className="container4" style={{
            height: he,
            display:'flex',
            justifyContent:'center'
        }}>

            <div style={{
                textAlign:'center',
                marginTop:he/2-110
            }}>
                <h1 className="display-3" style={{
                    fontWeight:'600'
                }}>404</h1>
                <h1 style={{
                    fontWeight:'600'
                }}>error</h1>
                <h2>page not found</h2>
                <h3>The requested URL
                    <span className="text-danger m-2">
                        {pathname}
                    </span>
                    {" "}
                    was not found
                </h3>
            </div>

        </div>
    );

}