import * as redux from 'redux';
const createStore = redux.createStore;


var initialState = {
    loggedIn : false,
    username : null
};

const rootReducer = (state = initialState, action) => {
    return state
};

const store = createStore(rootReducer);

console.log(store.getState());