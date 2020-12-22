import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Docs from "./pages/Docs";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/docs" component={Docs} />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
