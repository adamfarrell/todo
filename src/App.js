import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
// import logo from './logo.svg';
import "./styles.min.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import SignIn from './pages/SignIn';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <main className="page">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage} />
              {/* <Route path="/sign-in" component={SignIn} /> */}
              {/* <Route path="/" component={} />
              <Route path="/" component={} /> */}
              <Route component={HomePage} />
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
