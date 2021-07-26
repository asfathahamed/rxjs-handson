import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Simple from "./components/simple-1/simple-1";
import Simple2 from "./components/simple-2/simple-2";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const drawerWidth = 240;

export default function App() {
  const classes = useStyles();

  const routes = [
    {
      path: "/",
      exact: true,
      content: () => <h1>Introduction</h1>,
    },
    {
      path: "/simple1",
      sidebar: "Simple",
      component: Simple,
    },
    {
      path: "/simple2",
      sidebar: "Simple 2",
      component: Simple2,
    },
  ];

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              <Link to="/">RxJS Experiments</Link>
            </Typography>
          </Toolbar>
        </AppBar>
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
              (route, index) =>
                route.sidebar && (
                  <Link to={route.path} key={index}>
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
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Switch>
            {routes.map((route) => (
              <Route
                path={route.path}
                key={route.path}
                exact={route.exact}
                component={route.component}
              >
                {route.content && <route.content />}
              </Route>
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
}
