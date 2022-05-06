import React from 'react';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar'

import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';


function Header(){
    return(
        <div>
            <AppBar>
                
    <Grid container spacing={30} justifyContent="center" >
        <Grid item >
        <a href="tel:3237870411">  hello world </a>

        </Grid>
        <Grid item>
           <a>Wello horld</a> 
        </Grid>                                                                                                                                                                                                                                                                    

    </Grid>
            </AppBar>

        </div>
    );
}

export default Header; 