import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { addOneToCounter, subtractOneToCounter } from '../actions/index'
import {connect} from 'react-redux'
// import store from '../index.jsx'

class App extends Component {
  constructor() {
    super();
    this.State = {x:1}
}
  incHandler(e){
    console.log('inc clicked')
    
    
    this.props.addOneToCounter()
  }
  decHandler(e){
    console.log('dec clicked')
    
    this.props.subtractOneToCounter()
  }

  

  render() {
   

    return (
      // console.log('Props: ', this.props)
      <div className="app">
        <h1>Counter Example</h1>
        <button 
            className = "btn btn-primary"
            style = {{marginRight: '20px'}}
            onClick= {this.incHandler.bind(this)}  >
          Increment
        </button>
        <button className = "btn btn-danger"
                onClick = {this.decHandler.bind(this)}
                >
          Decrement
        </button>
        <h2>Value: {this.props.counter}</h2>
      </div>
    );
  }
};

function mapStateToProps({counter}){
  return{
    counter

  }
}

export default connect(mapStateToProps, {addOneToCounter, subtractOneToCounter})(App)

App.propTypes = {
  //getVideos: PropTypes.func.isRequired,
}