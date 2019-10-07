import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/routes';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Router>
          <Header></Header>
          <Routes />
          <footer>
            <Footer></Footer>
          </footer>
        </Router>
      </Container>
    );
  }
}

export default App;
