import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import AsyncValidationWrapper from './form/asyncValidationWrapper'

class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
  }

 render() {
   const {
    asyncValidation
   } = this.props;
  console.log('fucking values', asyncValidation ? asyncValidation.values : '');
  return (
   <div className="App">
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <div>
    <pre>
      {
        JSON.stringify(this.props)
      }
      </pre>
      <button onClick={this.simpleAction}>Test redux action</button>
    </div>
    <AsyncValidationWrapper />
   </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state.form
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);