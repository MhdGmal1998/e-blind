import React, { useState } from "react";

import { useNavigate, Link } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { Box, display } from "@mui/system";
import { Block } from "@mui/icons-material";

// to align items in center 
const styleCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
}

export default () => {

    let navigate = useNavigate();
    const userName = React.useRef();
    const password = React.useRef();

    const [isReady, setReady] = React.useState(null)




    return (
        <div className="row">
           
            <div className="col-md-2" />
            <div className="col-md-8">
                <div style={{
                    ...styleCenter, // for more style attributes
                }} >

                   

                </div>
               
                <form  >
                    <input type="text" style={{ padding: "13px", backgroundColor: '#F8F8F8' }} className="form-control mt-3"
                        placeholder="Username"
                        ref={userName}

                        required={true}
                    />

                    <input style={{ padding: "13px", backgroundColor: '#F8F8F8' }} type="password" className="form-control mt-2"
                        placeholder="Password"
                        ref={password}
                        required={true}
                    />

                    <div style={{
                        display: "flex",
                        justifyContent: 'space-between'
                    }}>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="privacy"
                            />
                            <label class="form-check-label" for="privacy">
                                Remember me
                            </label>
                        </div>
                        <div class="form-check">
                            <a href="#" style={{
                                textDecoration: 'none',
                                color: 'black'
                            }}>Forgot Password ?</a>
                        </div>
                    </div>

                    <div style={styleCenter}>
                        You don't have an account ? <Link to="/register" style={{
                            textDecoration: 'none'
                        }}> Register </Link>
                    </div>
                    <div style={styleCenter}>
                        <input type="submit" className="btn mt-2"

                            value="Login"
                            style={{
                                backgroundColor: color[0],
                                color: color[2],
                                display: " block",
                                width: "100%",
                                padding: "13px"
                            }} />
                    </div>
                </form>
            </div>
        </div>

    )
}

const color = [
    "#000052",
    "#D90429",
    "#fff",
]
