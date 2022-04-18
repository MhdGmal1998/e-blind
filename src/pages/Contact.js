import React from 'react'
import BottomNavigation from '../BottomNavigation'
import Toolbar from '@mui/material/Toolbar';
import { Paper } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './index.css'
export default function Home() {
    return (
        <BottomNavigation value={3}>
            <div className='container2' style={{

                //  backgroundColor: '#8080ff',
                display: 'flex',
                flexDirection: 'column'

            }}>

                <div style={{
                    marginTop: '120px'
                }}>

                    <h1 style={{
                        textAlign: 'center'
                    }}>Contact Our Site Team</h1>

                    <p style={{
                        textAlign: 'center',
                        fontSize: '22px'
                    }}>Our Team is Very Happy to provide us with your note to enhace our services and got to be the better

                    </p>

                    <p style={{
                        textAlign: 'center',
                        fontSize: '22px'
                    }}>
                        We Will be thankfull to do that , please Do it ...
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap'
                }}>
                    <Paper className='rotate' style={{
                        borderRadius: '0 60px 10px'
                    }}>
                        <Box
                            sx={{
                                width: '100%',
                                maxWidth: '100%',
                            }}
                        >
                            <TextField fullWidth label="your name" id="fullWidth" placeholder='the name is an optional' />
                        </Box>
                        <Box style={{
                            marginTop: '40px'
                        }}>
                            <TextField fullWidth label="your notifice" id="note" placeholder='Enter your Notes ...'
                                multiline
                                maxRows={12}
                                rows={8}

                            />
                        </Box>

                        <Box style={{
                            marginTop:'12px',
                            display:'flex',
                            flexDirection:'row-reverse'
                        }}>
                            <Button variant="outlined" size="large">
                                Submit
                            </Button>
                        </Box>
                    </Paper>

                    <div className='container3' style={{
                        height: '100px',
                        marginLeft: '120px',
                        opacity: '0.4',
                        width: '400px',
                        color: 'white',
                        padding: '30px',
                        borderRadius: '30px 0 0',
                        marginTop: '300px',
                        marginBottom: '100px'

                    }}>
                        Make Sure that any note arrives us from you, we will think about it
                    </div>
                </div>
            </div>

        </BottomNavigation>
    )
}
