import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { createTheme } from '@material-ui/core';
import { findByLabelText } from '@testing-library/react';
import VideoPoster from './VideoPoster';
import EditIcon from '@material-ui/icons/Edit';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { Tooltip } from '@material-ui/core';

const theme = createTheme({
  typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
          'Poppins',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
      ].join(','),
      allVariants: {
          color: "#111235"
      },
  },
  root: {},
  palette: {

      background: {},
      primary: {
          // light: will be calculated from palette.primary.main,
          main: '#111235',
          // dark: will be calculated from palette.primary.main,
          // contrastText: will be calculated to contrast with palette.primary.main
      },
      secondary: {
          main: '#FF261A',
          // dark: will be calculated from palette.secondary.main,
      },
      primaryLight: {
          main: '#F3F5FA',
      },
      star: {
          main: '#FF9529',
      },
      // Used by `getContrastText()` to maximize the contrast between
      // the background and the text.
      contrastThreshold: 3,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset: 0.2,
  },
});

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {

      width: '100%',
      paddingLeft:'15px',
      paddingTop:'10px',


    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,


    },


    container: {
      "&:hover": {
        backgroundColor: 'allVariants',
        color: 'black'
      },
      noBorder: {
        border: "none",
      },
      borderRadius: '15px',
      margin: '10px',

    },

   
    accoexpandContent:{
             display:'block',
             overflow:'auto',
    },
    accexpandoption:{
      display:'flex',
      marginBottom:'-60px',
      justifyContent:'spaceAround',
      marginTop:'25px',
    
    },

    
     accvideocontaint:{
           marginLeft:'8%',
         
          
     },
    
    
    accoptionText:{
      marginTop:'30px',
      marginTop:'35px',
      paddingLeft:'-50px',
      marginLeft:'-250px',
     marginRight:'0px',
     width:'65%',
      },
      
      icons:{
       display:'flex',
       justifyContent:'center',
       paddingLeft:'80%',
      },

    "@media (max-width: 956px)": {
      root: {

        width: '100%',
        paddingLeft:'0px',
      },
     
      accorVideo:{
     
      marginRight:'-10%%',
      paddingRight:'-10px',
      width:'30%',
     
     
     
      },
      accoptionText:{
        marginTop:'20px',
        paddingLeft:'-50px',
        marginLeft:'-150px',
        marginRight:'0px'
         },
    },

    "@media (max-width: 410px)": {
      root: {

        width: '100%',
        paddingLeft:'0px',
      },
     
      accorVideo:{
     
      marginRight:'-10%',
      paddingRight:'-10px',
     
      },
      accoptionText:{
        marginTop:'20px',
        width:'80%',
        marginRight:'0px',
        paddingLeft:'-10px',
        marginLeft:'-200px'
     
         },
         VideoPoster:{
           width:'20%',
          
         }
    }
  }),
);

export default function SimpleAccordion() {
  const [current, setCurrent] = useState(-1);
  const changeStates = (panel) => (e, newvalue) => {
    setCurrent(newvalue ? panel : -1);
  }
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion expanded={current == 0} onChange={changeStates(0)} className={classes.container} variant="outlined">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Introduction </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accoexpandContent}>
         
        
          <div className={classes.accexpandoption}>
          <Typography className={classes.accvideocontaint}>
          
          <VideoPoster image='https://image.shutterstock.com/image-photo/young-student-watching-lesson-online-600w-1676998306.jpg'/>


          </Typography>
         
          <Typography className={classes.accoptionText}>Activity life cycle.mp4 <br></br>20 May,2021 02:52</Typography>
        
          
          </div>

          <div className={classes.icons}>
          <PlayArrowIcon style={{padding:'10px'}}></PlayArrowIcon>
          <EditIcon style={{padding:'10px'}}></EditIcon>
          </div>
          <hr></hr>
          
          <div className={classes.accexpandoption}>
          <Typography className={classes.accvideocontaint}>
          <VideoPoster image='https://image.shutterstock.com/image-photo/young-student-watching-lesson-online-600w-1676998306.jpg'/>


          </Typography>
          <Typography className={classes.accoptionText}>Stopwatch App<br></br>20 May,2021 02:52</Typography>
          </div>
          <div className={classes.icons}>
            <Tooltip title="play">
            <PlayArrowIcon style={{padding:'10px'}}></PlayArrowIcon>
            </Tooltip>
            <Tooltip title="edit">
            <EditIcon style={{padding:'10px'}}></EditIcon>
            </Tooltip>
        
          </div>
         <hr></hr>


         <div className={classes.accexpandoption}>
          <Typography className={classes.accvideocontaint}>
          <VideoPoster image='https://image.shutterstock.com/image-photo/young-student-watching-lesson-online-600w-1676998306.jpg'/>


          </Typography>
          <Typography className={classes.accoptionText}>Stopwatch App<br></br>20 May,2021 02:52</Typography>
          </div>
          <div className={classes.icons}>
          <PlayArrowIcon style={{padding:'10px'}}></PlayArrowIcon>
          <EditIcon style={{padding:'10px'}}></EditIcon>
          </div>
        </AccordionDetails>
      </Accordion>



      <Accordion expanded={current == 1} onChange={changeStates(1)} className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Getting inspired</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ReactPlayer url={'https://www.youtube.com/watch?v=3olM-9vcd4M'}  width={"20%"}
                height={"30%"} className="accordianOption"></ReactPlayer>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={current == 2} onChange={changeStates(2)} className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Coming Up with Concepts</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <ReactPlayer url={'https://www.youtube.com/watch?v=3olM-9vcd4M'}  width={"20%"}
                height={"30%"} className="accordianOption"></ReactPlayer>
          
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={current == 3} onChange={changeStates(3)} className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Researching Venders</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={current == 4} onChange={changeStates(4)} className={classes.container}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Designing a Patch</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}