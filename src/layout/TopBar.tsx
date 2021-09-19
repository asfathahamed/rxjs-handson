import { makeStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import { drawerWidth } from "./SideBar";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  brand:{
    color:'#FFF',
    textDecoration:'none',
    "&:hover":{
      color:'#999999',
      textDecorationLine:'underline',
    }
  }
}));

export const TopBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link to="/" className={classes.brand}>RxJS Experiments</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

// export default TopBar;
