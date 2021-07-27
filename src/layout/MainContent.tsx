import { makeStyles } from "@material-ui/core";
import { Route, Switch } from "react-router-dom";
import { RouteConfig } from "../routes";

const useStyles = makeStyles((theme) => ({
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));
interface MyProps {
  routes: Array<RouteConfig>;
}

export const MainContent = ({ routes }: MyProps) => {
  const classes = useStyles();
  return (
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
  );
};

// export MainContent;
