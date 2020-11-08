import React from 'react'; 
import { Route } from 'react-router-dom';
import NavigationBar from  './Components/Nav-bar/index';
import About from './Components/About/index';
import Resume from './Components/Resume/index';
import Contact from './Components/Contact/index';
import Body from './body';

import Grid from '@material-ui/core/Grid';
function App() {
  return (
    <div className="App">
      <Grid container direction="column" justify="center">
        <Grid item  sm={6} >
          <NavigationBar/>
        </Grid>
          <Route exact path= '/' component={Body}/>
          <Route path= '/About' component={About}/>
          <Route path= '/Resume' component={Resume}/>
          <Route path= '/Contact' component={Contact}/>
      </Grid>
    </div>
  );
}

export default App;
