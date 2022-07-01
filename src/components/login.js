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
        alert("tes Username:"+u+" Password:"+p);

        let cek_login = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: u,
              password: p,
              // expiresInMins: 60, // optional
            })
          })
          .then(res => res.json())
          .then(hasil => {return hasil});
        
        if(cek_login.username === undefined){
            alert('Login gagal');
        }else{
            alert('Login berhasil. Selamat datang '+cek_login.firstName);
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
                Selamat datang {auth.user.firstName}
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

