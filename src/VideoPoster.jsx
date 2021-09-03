import React from 'react';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { createStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    
    videoPoster: {
     width:'35%',
     height:'50%',
     paddingBottom:'80px',
     marginRight:'0px',
     paddingRight:'0px',
     marginTop:'12px'

     
    },
  }),
);

const VideoPoster = (props) =>{
    const classes = useStyles();
    return(
        <CardMedia
        className={classes.videoPoster}
        alt="GeeksforGeeks"
        component="img"
        title="GeeksforGeeks"
        height="150"
        image={props.image}
        
      />
    )
}

export default VideoPoster;