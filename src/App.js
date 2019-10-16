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

// I solemnly swear that I am up to no good.
const lists = [
  {
    name: 'Fruit',
    items: [
      { text: 'Apples', isDone: false },
      { text: 'Bananas', isDone: false },
      { text: 'Oranges', isDone: true },
      { text: 'Kiwi', isDone: false },
      { text: 'Pineapple', isDone: false },
      { text: 'Tomatoes', isDone: false }
    ]
  },
  {
    name: 'Video Games',
    items: [
      { text: 'Last of Us 2', isDone: false },
      { text: 'Red Dead Redemption 2', isDone: true },
      { text: 'World of Warcraft: Battle for Azeroth', isDone: true },
      { text: 'Cyberpunk 2077', isDone: false },
      { text: 'Star Wars Jedi: Fallen Order', isDone: false }
    ]
  },
  {
    name: 'Los Numeros',
    items: [
      { text: 'Uno', isDone: false },
      { text: 'Dos', isDone: true },
      { text: 'Tres', isDone: false },
      { text: 'Cuatro', isDone: false },
      { text: 'Cinco', isDone: false },
      { text: 'Seis', isDone: true },
      { text: 'Siete', isDone: false },
      { text: 'Ocho', isDone: false },
      { text: 'Neuve', isDone: false },
      { text: 'Dies', isDone: false },
      { text: 'Once', isDone: true },
      { text: 'Doce', isDone: false },
      { text: 'Trece', isDone: false },
      { text: 'Catorce', isDone: false }
    ]
  },
  {
    name: 'Food',
    items: [
      { text: 'Hamburgers', isDone: false },
      { text: 'Long Pig', isDone: true },
      { text: 'Pulled Pork', isDone: false },
      { text: 'Fries', isDone: false },
      { text: 'Popcorn', isDone: false }
    ]
  }
];
// Mischief managed

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
              {/* <Route path="/" component={} />
              <Route path="/" component={} /> */}
            </Switch>
          </main>
        </div>
      </Router>
    )
  }
}

export default App;
