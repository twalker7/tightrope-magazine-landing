import React from 'react'
import Grid from '@mui/material/Grid';


function Content(){

    return(
        <div>
    
            <div className="contentContainer" >
                    <h1 className="contentHeader"> Content </h1> 
                    <div className="contentBody">
                        <Grid container flexDirection="row" spacing={0}> 
                            <Grid item lg={2}>
                                <div className="columnContain">
                                    <h3> title</h3>
                                </div>
                            </Grid>
                            <Grid item lg={8}>
                                <div className="columnContain">
                                    <h2> title</h2>
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <div className="columnContain">
                                    <h3> title</h3>
                                </div>
                            </Grid>
                             
                        </Grid>
                    </div> 
            </div> 
        </div>
    );
}



export default Content;