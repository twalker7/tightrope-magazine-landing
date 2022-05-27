import React from 'react'; 
import Grid from '@mui/material/Grid';

function Nav(){
return (
    <div>
            <div className="navBar">
                
                <Grid container spacing={5} justifyContent="center"  >
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
                        </div>
    </div>
);
}

export default Nav; 
