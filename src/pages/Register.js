import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Link } from 'react-router-dom';
import './index.css'
export default function FormPropsTextFields() {
  return (
    <div className='container2'>
      <Box style={{
        display: 'flex',
        justifyContent: 'center',
        height: '900px'
      }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1 },
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
          }}
        >
          <h1 style={{
           // color: '#8080ff'
           color:'white'
          }}>Signup</h1>

          <Box style={{
            width: '100%'
          }}>
            <TextField
              label="user name"
              fullWidth
              required={true}

            />
          </Box>

          <Box style={{
            width: '100%'
          }}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              required={true}

            />
          </Box>

          <Box style={{
            width: '100%'
          }}>
            <TextField
              label="Password"
              fullWidth
              type="password"
              required={true}

            />
          </Box>

          <Box style={{
            width: '100%'
          }}>
            <TextField
              required={true}

              label="Age"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>


          <Box style={{
            width: '100%'
          }}>
            <TextField
              required={true}
              label="Phone number"
              type="number"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Box>

          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                required={true}
                row
                name='gender'>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />

              </RadioGroup>
            </FormControl>
          </Box>
          <Box>
            You have already Acount, <Link to="/">Login</Link>
          </Box>
          <Box style={{
            width: '100%'
          }}>

            <input type="submit" className="btn mt-2"

              value="Register"
              style={{
                backgroundColor: '#8080ff',
                color: 'white',
                display: " block",
                width: "100%",
                padding: "13px",
                margin: '10px'
              }} />
          </Box>


        </Box>
      </Box>
    </div>
  );
}