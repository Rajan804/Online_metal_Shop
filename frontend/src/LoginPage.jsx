// import React from "react";

// export default function LoginPage(){
//     return(
        
            
//             <h1>Login Page</h1>
            
       
//     )
// }
import { makeStyles } from '@mui/styles';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

const LoginPage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="bg-blue-500">
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default LoginPage;
