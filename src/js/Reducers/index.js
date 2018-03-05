import { combineReducers } from 'redux'
import counter from './counter'

const reducers = combineReducers({
  counter: counter
})

export default reducers

// const reducers = function(state=0, action){
//     if (action.type === 'addOne') {
//     return state + action.payload
//     console.log('state is', state) 
//     }
//     if (action.type === 'subtractOne') {
//     return state - action.payload
//     console.log('state is', state) 
//     }
//     return state; 
// }

// export default reducer;