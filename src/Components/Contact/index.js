import React,{useState} from 'react';
import axios from 'axios';
 
import { Grid, Typography,
        TextField,InputAdornment,Button, Box,Divider } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle, Email, Message,Subject, Send,Home,Call } from '@material-ui/icons';

const useStyle = makeStyles((theme)=>({
    conatactContainer:{
        marginTop:'50px',
        Minheight:'100vh',
    },
    formBox:{
    	padding:'10px',
    	 [theme.breakpoints.up('md')]:{
            padding:" 10px 150px",
           
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
         [theme.breakpoints.up('md')]:{
           width:"50%",
        },
        width:"40px",
     },
    sendButton: {
    	display:'flex',
    	justifyContent:'center',
      margin: theme.spacing(1),
    },
    addresBox:{
        border:'1px solid black',
        padding:'1%',
    },
    contactHeading:{
        fontWeight:'900',
    },
    contactInfo:{
    		display:'flex',
    		padding:"10%",
    },
    icons:{
        color:'#08d665',
        paddingRight:'10px'
    }
}))
export default function Contact(){
    const classes = useStyle();
    
   	const [error,setError] = useState(
   	{
   		nameError:'',
   		emailError:'',
   		subjectError:'',
   	});
   	
   	const [isvalid,setIsvalid] = useState(false);
    const [state,setState] = useState(
    {
    	fullname:'',
    	email:'',
    	subject:'',
    	messege:''
    });
    
   /* const handleSubmit = () =>{
    	if(!validate()){		
				axios.post('http://localhost:5000/',{...state}).then((res) =>
				{
					console.log(res);
					console.log(res.data);
				}
				)
    	}
    };
    
    /*function validate(){
			if (!state.fullname){
    	 	 setError(...error,nameError:'*Name required');
    	 	 setIsvalid(true)
    	}
    	if (!state.subject){
    	 	setError(...error,subjectError:'*subject required');
    	 	setIsvalid(true)
    	}
    	else{
    		setError(...error,emailError:'*email required')
    		setIsvalid(false)
    	}	   	
    	if (!state.email){
    	 	 setError("**required");
    	 	 setIsvalid(true)
    	}
    	if(state.email){
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+	\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(state.email)) {
           setError("Please enter valid email address.");
           setIsvalid(true);
        }
      }
    }*/
    return(
        <div className={classes.conatactContainer}>
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Typography variant="h3" style={{textAlign:'center',marginTop:'50px'}}>Contact Me</Typography>
                    <Divider variant='middle' style={{backgroundColor:'green'}} />
                </Grid>
                <Grid item xs={12} sm={7} className={classes.formBox}>
                        <TextField  id="standard-full-width" label='Full name'
                        error={isvalid} helperText={error.name}
                         onChange={(event)=>{setState({...state,fullname:event.target.value})}} 
                        	 fullWidth margin="normal"  InputProps={{
                            startAdornment:(
                                <InputAdornment position='start' >
                                    <AccountCircle />
                                </InputAdornment>
                            ),
                            shrink:true,
                        }} variant="filled" />
                        <TextField  id="standard-full-width"
                        error={isvalid} id="standard-error-helper-text"
                        helperText={error.emailError}
                         onChange={(event)=>{setState({...state,email:event.target.value})}}
                        		label='Email Id' fullWidth margin="normal" InputProps={{
                            startAdornment:(
                                <InputAdornment position='start' >
                                    <Email/>
                                </InputAdornment>
                            ),
                            shrink:true,
                            
                        }} variant="filled" />

                         <TextField  id="standard-full-width" label='Subject' error={isvalid}
                          helperText={error.subjectError}
                         onChange={(event)=>{setState({...state,subject:event.target.value})}}
                         		fullWidth margin="normal" InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Subject />
                                </InputAdornment>
                            ),
                            shrink:true,
                            
                        }} variant="filled" />

                        <TextField  id="standard-full-width" label='Messege' 
													onChange={(event)=>{setState({...state,messege:event.target.value})}}
                         fullWidth margin="normal" 
                            multiline 
                            rows={4} InputProps={{
                            startAdornment:(
                                <InputAdornment position='start'>
                                    <Message style={{position:'relative',bottom:40}}/>
                                </InputAdornment>
                            ),
                            shrink:true,
                        }} variant="filled" />
				                <Box component='div' className={classes.sendButton}>
				                  <Button variant="contained" endIcon={<Send/>}
				                      style={{
				                      	color:'white',
      													backgroundColor:'#08d665',
      													}} >
				                      Send Messege
				                  </Button>
                        </Box>
                </Grid>
               { 
                //
                //
                //
                //
                }
                <Grid item xs={12} sm={4} style={{padding:'30px'}}>
                	<Box component="div" className={classes.addresBox}>
                    <Box className={classes.contactInfo}>
                        <Home className={classes.icons} fontSize='large' />
                        <Box>
                            <Typography className={classes.contactHeading}>HOME</Typography>
                            <br/>
                            <Typography >1B,pera street,<br/>papanaickenpalayam,<br/>Coimbatore - 641037</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.contactInfo}>
                        <Call className={classes.icons} fontSize='large' />
                        <Box>
                            <Typography  className={classes.contactHeading}>Phone</Typography><br/>
                            <Typography >+91 9659654334</Typography>
                        </Box>
                    </Box>
                    <Box className={classes.contactInfo}>
                        <Email className={classes.icons} fontSize='large' />
                        <Box>
                            <Typography  className={classes.contactHeading}>Email</Typography><br/>
                            <Typography >nandhakumar270@gmail.com</Typography>
                        </Box>
                    </Box>
                	</Box>   
                </Grid>
            </Grid>
        </div>
    )
}
