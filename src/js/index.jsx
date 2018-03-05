import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';



import{
  createStore,
} from 'redux';

import reducers from './Reducers/index'
import {Provider} from 'react-redux'

let store = createStore(reducers)



ReactDOM.render(
  <Provider store ={store}><App  /></Provider>,
  document.querySelector('#app')
);

// export default store;




// const reducer = function(state={}, action){
//   switch(action.type){
//     case 'addOne':
//       if (state.number === undefined) {
//         var newState = {...state, number: action.payload}  
//       }else{
//         var newState = {...state, number: state.number + action.payload}
//       }
      
//       console.log(newState)
//       return newState
//     case 'newValue':
//       var newState = {...state, number: action.payload}
//       console.log('New state is ', newState)
//       return newState
//   }
// }


  // console.log('callback args are', state, action)
//   if (action.type === 'addOne') {
//   var newState =  state + action.payload;
//   console.log('my new state is ', newState)
//   return newState;
//   }else if(action.type === 'subtractOne'){
//     var newState = state - action.payload
//     console.log('my new state is ', newState)
//     return state;
//   }
//   else if(action.type === 'newValue'){
//     newState = action.payload
//     console.log('my new state is ', newState)
//     return state;
//   }
//   return state;
// };


// let store = createStore(reducer);
// //to change state's value
// // Only 'type' is reserved
// store.dispatch({
//   type: 'addOne',
//   payload: 1
// })
// store.dispatch({
//   type: 'addOne',
//   payload: 1
// })
// store.dispatch({
//   type: 'addOne',
//   payload: 1
// }) 
// store.dispatch({
//   type: 'newValue',
//   payload: 6
// // })