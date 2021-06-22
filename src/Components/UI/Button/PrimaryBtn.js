import { Button, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));
  export default function PrimaryBtn({onClick,startIcon,children}) {
    const classes = useStyles();
  
    return (
        <Button
          className={classes.button}
          startIcon={startIcon}
          onClick={onClick}
        >
          {children}
        </Button>
    )
  }