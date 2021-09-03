import React from 'react'
import SimpleAccordion from './SimpleAccordion'
import VideoJs from './VideoJs'
import './Videojs.css'
import { makeStyles } from '@material-ui/core'
import { createStyles } from '@material-ui/styles'
import { Grid } from '@material-ui/core'


export default function App() {
  
  return (

    <Grid container spacing ={3}>
         <Grid item md={12} lg={8}>
           <VideoJs></VideoJs>
         </Grid>
         <Grid item xs={12} sm={12} lg={4}>
          <SimpleAccordion></SimpleAccordion>
         </Grid>
    </Grid>
    
  )
}
