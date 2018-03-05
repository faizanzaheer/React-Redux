



const counter = function(state=0, action){
    if (action.type === 'addOne') {
    return state + action.payload
    console.log('state is', state) 
    }
    if (action.type === 'subtractOne') {
    return state - action.payload
    console.log('state is', state) 
    }
    return state; 
}

export default counter;