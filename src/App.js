import React, { Component } from 'react';
import Layout from './components/Layout/Layout'
import classes from './App.css';
import layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Layout>
        <div className={classes.App}>  test </div>
      </Layout>
    );
  }
}

export default App;
