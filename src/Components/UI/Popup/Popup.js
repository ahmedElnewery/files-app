import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';


const Popup = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;
    return ( 
        <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{children}</div>
      </Popper>
     );
}
 
export default Popup;