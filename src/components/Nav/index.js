import React from 'react'; 
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

function Nav(){
return (
    <div>
            <AppBar>
                
                <Grid container spacing={30} justifyContent="center"  >
                    <Grid item >
                    <a href="tel:3237870411">  Contact </a>
            
                    </Grid>
                    <Grid item>
                       <a>About</a> 
                    </Grid>                                                                                                                                                                                                                                                                    
            
                </Grid>
                        </AppBar>
    </div>
);
}

export default Nav; 
