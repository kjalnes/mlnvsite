import React, { Component } from 'react';
import { Grid, Container, Divider } from 'semantic-ui-react'
import './App.css';
import Menu from './Menu';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Scrollspy from 'react-scrollspy';

class App extends Component {

  render() {


    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">Make Love Not Var 【ツ】</h1>
        </header>
        <Container className='main-container'>
          <Grid className='inner-container'>
            <Grid.Column width={4}>
              <Menu />
            </Grid.Column>
            <Grid.Column width={11}>
              <About />
              <Projects />
              <Contact />
              <Divider hidden />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;







