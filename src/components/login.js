import { Button } from "@mui/material";
import { TextField } from '@mui/material';

import React, {useContext} from "react";

import { authContext } from '../App.js';
//import { HashLink as Link } from "react-router-hash-link";

function Login() {

    const auth = useContext(authContext)
    const submitLogin = async(event) =>{
        event.preventDefault();
        let u = event.target.username.value;
        let p = event.target.password.value;

        let cek_login = await fetch('https://api-hpt-blue-archive.herokuapp.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'key': '22bc653308b95d5c0117528df678a7d1' 
            },
            body: JSON.stringify({
                "username": u,
                "password": p
            })
          })
          .then(res => res.json())
          .then(hasil => {return hasil});

        // eslint-disable-next-line
        if(cek_login.code=="4"){
            alert(cek_login.message)
        // eslint-disable-next-line
        }else if(cek_login.code=="3"){
            alert(cek_login.message)
        // eslint-disable-next-line
        }else if(cek_login.code=="0"){
            alert('Welcome '+cek_login.name)
            auth.setUser(cek_login)
        }
    }

    const submitLogout = (event) =>{
        auth.setUser(null)
        alert('Logout berhasil');
    }

    return(
    <>
    {
        auth.user ? (
        <form onSubmit={submitLogout}>
            <p>
                Welcome {auth.user.name}
            </p>
            <Button type="submit" variant="contained" color="secondary">Logout</Button>
        </form>
        ) : (
        <form onSubmit={submitLogin}>
            <p>
                <TextField variant="filled" label="Username" name="username" type="text" required/>
                <TextField variant="filled" label="Password" name="password" type="password" required/>
            </p>
            <Button  type="submit" variant="contained" color="secondary">Login</Button>
        </form>
        )
    }
    </>
    )
}

export default Login;

