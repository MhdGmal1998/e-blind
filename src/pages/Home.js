import React from 'react'
import BottomNavigation from '../BottomNavigation'
import { ProductConsumer } from '../Context';
import users from '../users.json'
import { Link } from 'react-router-dom';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';


const GreenSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
        color: pink[600],
        '&:hover': {
            backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
        },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
        backgroundColor: pink[600],
    },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };
const styleCenter = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
}

export default function Home() {

    let modeSpeak = parseInt(localStorage.getItem('modeSpeack'));
    const userName = React.useRef();
    const password = React.useRef();

    const he = window.innerHeight;
    const [swich, setSwich] = React.useState(modeSpeak);
    return (
        <BottomNavigation value={0}>
            <div style={{
                height: he,
                backgroundImage: "url('/img/back.jpg')"
            }}>
                <div style={{
                    height: '50px'
                }}>
                </div>
                <div>
                    <Switch {...label} defaultChecked size='large' />

                    <span style={{
                        color: 'black',
                        marginLeft: '20px',
                        fontSize: '20px',
                        fontWeight: '500',
                        marginTop: '20px'
                    }}>
                        Speaking Mode
                    </span>
                </div>
                <div style={{
                    marginTop: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>


                    <div style={{
                        width:'800px'
                    }}>
                        <form>
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


            </div>

        </BottomNavigation >
    )
}

const color = [
    "#8080ff",
    "#D90429",
    "#fff",
]
