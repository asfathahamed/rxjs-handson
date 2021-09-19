import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { RouteConfig } from "../routes";

export const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  sidebarText:{
    color:'#000080',
    textDecoration:'none',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

interface MyProps {
  routes: Array<RouteConfig>;
}

export const SideBar = ({ routes }: MyProps) => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {routes.map(
          (route: RouteConfig, index: number) =>
            route.sidebar && (
              <Link to={route.path} className={classes.sidebarText} key={index}>
                <ListItem button key={index}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={route.sidebar} />
                </ListItem>
              </Link>
            )
        )}
      </List>
    </Drawer>
  );
};

// export default SideBar;
