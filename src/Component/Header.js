import { Grid } from '@mui/material';
import React from 'react';
import Navigation from './Navigation';
import  "../Component/Header.css";
import tietoEvry from "../img/tietoevry.png"

function Header() {
    return (
        <div className='Header'>
            <Grid container justifyContent="space-evenly" spacing={4}>
            <Grid item xs={12}>
                <Navigation/>
            </Grid>
            <Grid item xs={12} md={5}lg={5}>
               <h2>Tietoevry Create</h2>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </Grid>
            <Grid item xs={12} md={6}lg={5}>
               <img src={tietoEvry}/>
            </Grid>
            </Grid>            
        </div>
    );
}

export default Header;
