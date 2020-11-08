import React,{useState,} from "react";
import {Link} from 'react-router-dom';
import { AppBar,Toolbar,
        ListItem,IconButton,
        ListItemText,Avatar,
        Divider,List,
        Typography,Box,ListItemIcon,Drawer} from "@material-ui/core";
import {
    ArrowBack,
    Home,
    AssignmentInd,
    Apps,
    Menu,
    ContactMail,
} from "@material-ui/icons";

import {makeStyles} from "@material-ui/core/styles";

const useStyle=makeStyles((theme)=>({
	navbar:{
		width:'100vW',
	},
	menuSlider:{
		height:"100%",
		width:'250px',
		backgroundColor:'tan',
		overflow:'hidden',
	},
	avatar:{
		display:'block',
		position:'relative',
		top:'0.5rem',
		margin:'0 auto 1.0rem auto',
		width:theme.spacing(13),
		height:theme.spacing(13),
	},
	backbutton:{
		position:'relative',
		left:'80%',
	},
}))
const menuItems =[
	{
		listIcon:<Home />,
		listText:"Home",
		listLink:'/',
	},
	{
		listIcon:<AssignmentInd />,
		listText:"About",
		listLink:'/About',
	},
	{
		listIcon:<Apps />,
		listText:"Resume",
		listLink:'/Resume',
	},
	{
		listIcon:<ContactMail />,
		listText:"Contacts",
		listLink:'/Contact',
	
	},
]
function NavigationBar(props){
	const [state,setState] = useState(false);
	
	const toggleSlider = () => { setState(!state);
			 console.log(state);}
	const classes = useStyle();
	
	const sideList= () => (
		<Box component='div' className={classes.menuSlider}>
			<IconButton onClick={toggleSlider} className={classes.backbutton}>
		  	<ArrowBack style={{color:'tomato',}}/>
		  </IconButton>
			<Avatar className={classes.avatar}>N</Avatar>
			<Divider variant='middle'/>
			<List>
				{menuItems.map((isItem,key)=>(
					<ListItem button key={key} component={Link} to={isItem.listLink}>
						<ListItemIcon>{isItem.listIcon}</ListItemIcon>
						<ListItemText>{isItem.listText}</ListItemText>
					</ListItem>
				))
			}
			</List>
		</Box>
	)
    return(
        <>   
          <Box component='nav' className={classes.navbar}>
              <AppBar position="fixed" style={{backgroundColor:'#222'}}>
                  <Toolbar >
                      <IconButton onClick={toggleSlider}>
                          <Menu style={{color:'tomato'}}/>
                      </IconButton>
                      <Typography variant="h5">Nandha</Typography>
                  </Toolbar>
              </AppBar>            
          </Box>
          <Drawer anchor='left' open={state} onClose={toggleSlider} className={classes.drawer}>
						{sideList()}         
          </Drawer>
        </>
    )
}
export default NavigationBar;
