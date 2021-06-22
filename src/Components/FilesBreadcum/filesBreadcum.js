import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
    wapper:{
        padding:20,
        borderBottom:"1px solid #a8a8a8"
    }
  }));
export default function FilesBreadcum() {
    const classes = useStyles();

  return (
      <div  className={classes.wapper}>

      
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" onClick={handleClick}>
        Material-UI
      </Link>
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        Core
      </Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
    </div>
  );
}