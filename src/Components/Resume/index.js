import { Typography,Box, Grid,Divider,Button } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import { GetApp } from '@material-ui/icons';
import React from 'react';
import './style.scss';
const useStyle = makeStyles((theme)=>({
    resumeBox:{
        minHeight:'100vh'
    },
    downloadBox:{
    	[theme.breakpoints.up('md')]:{
           height:"30vH",
        },
			height:'20vH', 
			backgroundColor:'#222',     
    },
    downloadButton:{
			color:'#222',
			backgroundColor:'#08d665',
			[theme.breakpoints.up('md')]:{
				margin:'70px 0'
			},
			margin:'50px 0',
			height:'10vh'
    },
    descriptionBox:{
        padding:'70px 100px 100px 100px',
    },
    ContentBox:{
        marginTop:'100px',
    }
}))
export default function Resume(){
    const classes=useStyle()
    return(
        <Grid container className={classes.resumeBox}>
        		<Grid item xs={12} sm={12}>
                    <Typography variant="h3" style={{textAlign:'center',marginTop:'100px'}}>Resume</Typography>
                    <Divider variant='middle' style={{backgroundColor:'green'}}/>
            </Grid>
            <Grid item xs={12} sm={12} className={classes.descriptionBox}>    
                <Box component='div' className='ContentBox'>
                    <Typography variant="h4">Diploma in Electronic and communication</Typography>
                    <Typography variant="p">Kongu polytechnic college,Erode</Typography>
                    <br/>
                    <Typography variant="p"><strong>YEAR</strong>: 2011 - 2014</Typography>
                </Box>
                
                <Box component='div' className='ContentBox'>
                    <Typography variant="h4">Production Incharge</Typography>
                    <Typography variant="p">Express PowerTech,Erode</Typography>
                    <br/>
                    <Typography variant="p"><strong>YEAR</strong>: 2014 - 2015</Typography>
                </Box>

                <Box component='div' className='ContentBox'>
                    <Typography variant="h4">B.E Electronics and communication Engineering</Typography>
                    <Typography variant="p">Hindusthan college of engineering and Technology,Coimbatore</Typography>
                    <br/>
                    <Typography variant="p"><strong>YEAR</strong>: 2016 - 2019</Typography>
                </Box>

                <Box component='div' className='ContentBox'>
                    <Typography variant="h4">Cloud Imax</Typography>
                    <Typography variant="p">Front-end developer</Typography>
                    <br/>
                    <Typography variant="p"><strong>YEAR</strong>: 2019 - present</Typography>
                </Box>
            </Grid>
            <Grid item container xs={12} sm={12} justify='center' className={classes.downloadBox}>
            	<Box component="div" >
            		<Button variant="contained" href="./nandha.Resume.docx.pdf" download="./nandha_resume.pdf" endIcon={<GetApp />} className={classes.downloadButton} >
				                      Download Resume
				                  </Button>
            	</Box>
            </Grid>
        </Grid>
    )
}
