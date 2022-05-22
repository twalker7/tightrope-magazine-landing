import React from 'react'
import Grid from '@mui/material/Grid';


function Content(){

    return(
        <div>
    
            <div className="contentContainer" >
                    <h1 className="contentHeader"> Tightrope Magazine </h1> 
                    <div className="contentBody">
                        <Grid container flexDirection="row" spacing={0}> 
                            <Grid item lg={3}>
                                <section className="columnContain">
                                    <div className="columnTitleDiv"> 
                                        <h3> title</h3>
                                    </div>
                                    <div className="sideColumnBody"> 
                                        <img className ="sideColumnThumbnail" src=""/>
                                        <p> paragraph content </p>
                                    </div>
                                </section>
                            </Grid>
                            <Grid item lg={6}>
                                <section className="columnContain">
                                    <div className="columnTitleDiv">
                                        <h2> Main Story/jumbotron cover</h2>
                                    </div>
                                    <div className ="mainColumnBody"> 

                                    </div>
                                    <div>

                                    </div>
                                </section>
                            </Grid>
                            <Grid item lg={3}>
                                <section className="columnContain">
                                <div className="columnTitleDiv">
                                    <h3> title</h3>
                                </div>
                                    <div className="sideColumnBody">
                                    <img className ="sideColumnThumbnail" src=""/>
                                    
                        
                                        <p> paragraph content</p>
                                    </div>
                                </section>
                            </Grid>
                             
                        </Grid>
                    </div> 
            </div> 
        </div>
    );
}



export default Content;