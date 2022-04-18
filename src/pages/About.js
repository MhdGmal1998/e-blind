import React from 'react'
import BottomNavigation from '../BottomNavigation'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Link } from 'react-router-dom';
import './index.css'

export default function Home() {
    return (
        <div>

            <div className='container1' style={{
                display: 'flex',
                flexDirection: 'column'
            }}>
                <div style={{
                    display: 'flex',
                    height: '80px',
                    //backgroundColor: '#8080ff',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '80%'
                    }}>
                        <Link to="/Category">
                            <ArrowBackOutlinedIcon fontSize='large' style={{
                                color: 'black',
                                marginLeft: '50px',

                            }} />
                        </Link>
                    </div>
                </div>


                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        width: '55%',
                        //backgroundColor: '#8080ff',
                        color: 'black',
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: '50px'
                    }}>
                        <div style={{
                            marginTop: '50px'
                        }}>
                            <h1 style={{
                                marginTop: '10px',
                                fontFamily: 'Comic Sans MS',
                                fontSize: '80px'
                            }}>
                                About us
                            </h1>
                        </div>
                        <div>
                            <p style={{
                                // fontFamily: 'Brush Script MT',
                                fontFamily: 'MV Boli',
                                fontSize: '40px',
                                lineHeight: '32px',
                                paddingRight: '50px'
                            }}>

                                This website will primarily focus on assessing the use of modern online shopping software.
                            </p>
                        </div>

                        <div style={{
                            marginTop: '200px',
                            color: '#f2f2f2',
                            fontFamily: 'MV Boli',
                            fontSize: '30px',
                            lineHeight: '30px',
                            paddingRight: '50px'
                        }}>
                            <p>
                                This is page specificly is  for blind people that improve their online shopping by providing a reader that helps them to shop from the program, choose product and pay
                            </p>
                        </div>

                    </div>

                    <div style={{
                        backgroundImage: "url('')",
                        backgroundRepeat: 'no-repeat',
                        height: '600px',
                        width: '45%'
                    }}>
                        <img src='/img/back.jpg' style={{
                            width: '100%',
                            height: '100%'
                        }}>
                        </img>
                    </div>
                </div>



                <div style={{
     //               backgroundColor: '#8080ff',
                    height: '100px'
                }}>
                    <p style={{
                        color: 'black',
                        textAlign: 'center',
                        marginTop: '40px',
                        fontFamily: 'MV Boli',
                        fontSize: '30px'
                    }}>All Right is reseved for E-Blind @2022</p>
                </div>
            </div>
        </div>
    )
}
// ""