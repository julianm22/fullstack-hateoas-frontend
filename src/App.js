import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/Layout/Landing";
import NotFound from "./components/Layout/NotFound";
import Dashboard from "./components/CapabilityTool/Dashboard";
import AddCapability from "./components/CapabilityTool/AddCapability";
import UpdateCapability from "./components/CapabilityTool/UpdateCapability";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/addCapability" component={AddCapability} />
              <Route exact path="/updateCapability" component={UpdateCapability} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
