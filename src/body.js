import React from 'react';
import Home from "./Components/Home/home";
import Grid from '@material-ui/core/Grid';
import About from './Components/About/index';
import Resume from './Components/Resume/index';
import Contact from './Components/Contact/index';
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles(()=>({
  content:{
    paddingTop:"5%"
  }
}))
export default function Body () {
    const classes = useStyle();
    return(
        <Grid className={classes.content} item container xs={12} >
        <Grid item xs={12}  sm={12} className={classes.Home}>
                <Home />
        </Grid>
        <Grid item xs={12}  sm={12} >
                <About />
        </Grid>
                      
        <Grid item xs={12} sm={12}>
              <Resume />
        </Grid>
        <Grid item xs={12} sm={12}>  
                <Contact />
        </Grid>
      </Grid>

    )
}