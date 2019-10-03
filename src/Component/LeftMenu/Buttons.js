import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ButtonName from '../../Array/ButtonName'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(0.2 ),
    }
  }));
export default function Buttons(){
    const classes = useStyles();
        return (
            <Grid item>
              {ButtonName.map(d=>{
                return(
                  <Button key={d.Name                                                                                                 } variant="outlined" style={{color:'#7CC1FC',borderColor:'#7CC1FC'}}  size="small"className={classes.button} >
                  {d.Name}
                  </Button>   
                )
              })}
              <hr style={{color:'#A5D4FE'}}></hr>
            </Grid>
        )
    }

