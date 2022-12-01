import React from 'react';
import CardItem from './CardItem';
import Forms from './Forms';
import "./Main.css";
import { Grid } from '@mui/material';

import Mostafa from "../img/Mostafa.png";

function Main() {
    return (
        <div className='Main'>
            <a id="mainPage"></a>
<Grid container rowSpacing={10} columnSpacing={{ xs: 1 }}>

<Grid container item justifyContent="space-evenly" alignItems="center" rowSpacing={3} columnSpacing={{ xs: 2 }}>
            <Grid item xs="auto">
            <CardItem
            image = {Mostafa}
            name = "Mostafa Mohammedi"
            text = "Dette er min Bio"
            />
            </Grid>

            <Grid item xs="auto">
            <CardItem
            image = {Mostafa}
            name = "Mostafa Mohammedi"
            text = "Dette er min Bio"
            />
            </Grid>
            
            <Grid item xxs="auto">
            <CardItem
            image = {Mostafa}
            name = "Mostafa Mohammedi"
            text = "Dette er min Bio"
            />
            </Grid>
        </Grid>    
        <Grid container item justifyContent="space-evenly"  alignItems="center" gap={2} spacing={4}>

            <Grid item xs="auto">
            <CardItem
            image = {Mostafa}
            name = "Mostafa Mohammedi"
            text = "Dette er min Bio"
            />
            </Grid>

            <Grid item xs="auto">
            <CardItem
            image = {Mostafa}
            name = "Mostafa Mohammedi"
            text = "Dette er min Bio"
            />
            </Grid>
            
        </Grid>  
        </Grid>
                

        </div>
    );
}

export default Main;