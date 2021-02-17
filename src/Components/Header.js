import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SlideMenu from './SlideMenu'
import {GiSharkJaws} from 'react-icons/gi'
import {GiSharkFin} from 'react-icons/gi'
import {useHistory} from 'react-router-dom'


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



export default function ButtonAppBar() {
  const classes = useStyles();
  const history= useHistory();

  return (

    
    <div className={classes.root}>
      <AppBar position="static" 
      style={{
            backgroundColor: '#e2e2e2', 
            color: 'black',
            boxShadow: '1px 1px'
            }}
      
      >
        <Toolbar>
        <GiSharkFin/>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon 
           />
           <div className="slideMenu">
           <SlideMenu />
           </div>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            
          </Typography>
          <GiSharkJaws/>
          <Button 
            color="inheritred"
            onClick={(e) => {
              history.push('/login')}}
              >Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}