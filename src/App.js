import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import './App.css';
import Map from './Component/Map'
import LeftMenu from './Component/LeftMenu'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();

  return (
   <div className={classes.root}>
    <Grid container>
<Grid item xs={3}>
  <LeftMenu/>
</Grid>
<Grid item xs={7}>
  <Map/>
</Grid>
<Grid item xs={2} style={{border:'solid'}}>
 <h4>hello me</h4>
</Grid>
</Grid> 
</div>
  );
}
export default App;

/* <div className='container'>   
<div className="left-col">
<LeftMenu/>
</div>

<div className="center-col">
 <Map/>
</div>

<div className="right-col">
 <h4>Hello me</h4>
</div>
</div>   */