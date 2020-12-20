import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import ScrollProgressBar from '../components/ScrollProgressBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Scroll Progress Bar Example
          </Typography>
        </Toolbar>


        {/* Scroll Progress Bar with customization example */}
        <ScrollProgressBar height={"5px"} color={"#FF5E3C"} delay={"0s"}/>

        
      </AppBar>
      <Toolbar/>
    </div>
  );
}