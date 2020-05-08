import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import LoginPage from './components/login'
import NotesPage from './containers/notes'
import { connect } from 'react-redux';
import Header from './containers/header'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.3.3/dist/semantic.min.css"></link>
          <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.3.3/dist/semantic.min.js"></script>
          <Route path='/' render={routerProps => <Header {...routerProps}/>} />
          <Route exact path="/login" render={routerProps => <LoginPage {...routerProps}/>} />
          {this.props.user.username?
            <Route path="/notes" render={renderProps => <NotesPage {...renderProps} notes={this.props.notes}/>} />
          :
            <Redirect to="/login" />
          }
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    notes: state.notes
  }
}

export default connect(mapStateToProps)(App);
