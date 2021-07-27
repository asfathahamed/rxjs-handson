import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { MainContent } from "./layout/MainContent";
import { SideBar } from "./layout/SideBar";
import { TopBar } from "./layout/TopBar";
import { routes } from "./routes";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <TopBar />
        <SideBar routes={routes} />
        <MainContent routes={routes} />
      </Router>
    </div>
  );
}
