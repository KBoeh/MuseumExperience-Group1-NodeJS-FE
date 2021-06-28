import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./component/Homepage/Homepage";
import ExhibitPage from "./component/ExhibitPage/ExhibitPage";
import ExhibitInfo from "./component/ExhibitInfo/ExhibitInfo";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";
import SearchPage from "./component/SearchPage/SearchPage";
import Account from "./component/Account/Account";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/exhibitpage" component={ExhibitPage} />
          <Route exact path="/exhibitInfo" component={ExhibitInfo} />
          <Route exact path="/search" component={SearchPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
