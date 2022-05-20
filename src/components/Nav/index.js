import React from 'react'; 
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

function Nav(){
return (
    <div>
            <AppBar className="appBar">
                
                <Grid container spacing={30} justifyContent="center"  >
                    <Grid item >
                    <a href={()=>false}>Home</a>
            
                    </Grid>
                    <Grid item>
                       <a href={()=> false}>Publications</a> 
                    </Grid>  
                    <Grid item>
                        <a href={()=> false}>About</a>
                    </Grid>
                    <Grid item>
                        <a href={()=> false}>Contact</a>
                    </Grid>                                                                                                                                                                                                                                                                 
            
                </Grid>
                        </AppBar>
    </div>
);
}

export default Nav; 
