import React from "react";
import Particles from 'react-particles-js';
import Typed from 'react-typed';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import coffcoffeeapple from './coffee-apple.jpg';
const useStyle = makeStyles((theme)=>({
		homeContainer:{
			background:'url('+coffcoffeeapple+')',
            backgroundRepeat:'noRepeat',
            backgroundPosition:'center',
            backgroundAttachment:'fixed',
            backgroundSize:'cover',
            minHeight:'100vH',
            
		},
    Name:{
        position:"relative",
        textAlign:"center",
        top:"200px",
        color:'white',
        [theme.breakpoints.up('md')]:{
            fontSize:"50px",
        },
        fontSize:"30px",
        fontWeight:"900",
        fontFamily:"'Poppins', sans-serif",
        textTransform:"upperCase"
    },
    content:{
        position:"relative",
        textAlign:"center",
        top:"250px",
        color:"tan",
        fontSize:"20px",
        fontWight:"900",
        fontFamily:"'Poppins', sans-serif",
        textTransform:"upperCase",
    },
    particlesAnimate:{
        position:'absolute',
    }
}))
export default function Home(){
    const classes = useStyle();
    return(
        <div className={classes.homeContainer}>
            <Typography variant="h1" className={classes.Name}>
            	<Typed strings={['Nandha Kumar']} typeSpeed={40}  showCursor={false}/>
            </Typography>
            <Typography variant="h5" className={classes.content}>Im a passionate<br/> D
            	<Typed strings={['eveloper','esigner']} typeSpeed={200} backSpeed={110} loop showCursor={false}/>
            </Typography>
            <Particles canvasClassName={classes.particlesAnimate} params={{
                particles:{
                    number:{
                        value:45,
                        density:{
                            enable:true,
                            value_area:900
                        }
                    },
                    shape:{
                        type:'circle',
                        stroke:{
                            width:1,
                            color:"tomato"
                        }
                    },
                    size:{
                        value:3,
                        random:true,
                        anim:{
                            enable:true,
                            speed:6,
                            size_min:0.1,
                            sync:true,
                        }
                    },
                    opacity:{
                        value:1,
                        random:true,
                        anim:{
                            enable:true,
                            speed:1,
                            opacity_min:0.1,
                            sync:true   
                        }
                    }
                }
            }}/>
        </div>
    )
}
