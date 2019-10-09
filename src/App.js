import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer';
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './config/routes';
import { Provider } from 'react-redux';
import { store } from './redux/stores/store';

class App extends React.Component {

  render() {
    return (
      <Container>
        <Provider store={store}>
          <Router>
            <Header></Header>
            <Routes />
            <footer>
              <Footer></Footer>
            </footer>
          </Router>
        </Provider>
      </Container>
    );
  }
}

export default App;
