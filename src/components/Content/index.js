import React from 'react'
import Grid from '@mui/material/Grid';


function Content(){

    return(
        <div>
    
            <div className="contentContainer" >
                    <h2 className="contentHeader"> Content </h2> 
                    <div className="contentBody">
                        <Grid container flexDirection="row" spacing={0}> 
                            <Grid item lg={4}> H</Grid>
                            <Grid item lg={4}> I </Grid>
                            <Grid item lg={4}> G</Grid>
                             
                        </Grid>
                    </div> 
            </div> 
        </div>
    );
}



export default Content;