import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from '@material-ui/core/Avatar';
import { Grid,Divider,Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Profileimg from './profile.jpg';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles((theme)=>({
    About:{
        minHeight:'100vh',
        position:'relative',
        top:'70px'
    },
    imgbox:{
    	display:'flex',
    	justifyContent:'center',
    	padding:'50px',
    },
    avatar:{
        width:theme.spacing(30),
        height:theme.spacing(30),
        margin:theme.spacing(1),
        borderRadius:'30%',
        boxShadow:'5px 5px 5px grey',        
    },
    content:{
        fontWeight:'400',
        fontFamily: 'Poppins, sans-serif',
        padding:'50px',
        fontSize:'15px',
        wordWarp:'breakWord',
        lineHeight:'30px',
    },
    info:{
        lineHeight:'50px',
       
    },
    infoHeading:{
        fontWeight:'900',
        width:'20%',
        display:'inline-Block'
    }
}))
export default function About(){
    const classes = useStyles();
    return(
        <div className={classes.About}>
            <Grid container>
            		<Grid item xs={12} sm={12}>
                    <Typography variant="h3" style={{textAlign:'center'}}>About</Typography>
                    <Divider variant='middle' style={{backgroundColor:'green'}} />
            		</Grid>
                <Grid item xs={12} sm={6} className={classes.imgbox}>
                    <Avatar variant="square" src={Profileimg} alt="N" className={classes.avatar} />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.content}>
                    <span style={{fontSize:'32px',textTransform: 'capitalize'}}>Hello I Am Nandha</span><br/>
                    <Typography variant="p">
                    I'm a friendly, approachable person who gets along well with others.<br/>
					I work well in a team and independently.<br/>
					I have a huge passion for designing and creating things.<br/>
					My favourite hobby is to code and learn new computer languages, libraries and frameworks.<br/> 
					I love to put in to practice everything I learn and use new skills whenever possible. 
                    </Typography>
                    <Box className={classes.info}><span className={classes.infoHeading}>Age</span>: 25</Box>
                    <Box className={classes.info}><span className={classes.infoHeading}>City</span>: Coimbatore</Box>
                    <Box className={classes.info}><span className={classes.infoHeading} style={{lineHeight:'20px'}}>Mobile</span>: +91 9659654334</Box>
                    <Box className={classes.info}><span className={classes.infoHeading}>Email</span>: nandhakumar270@gmail.com</Box>
                </Grid>
            </Grid>
        </div>
    )
}
