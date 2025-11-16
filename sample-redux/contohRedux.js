import * as redux from 'redux';
const createStore = redux.createStore;


var initialState = {
    loggedIn : false,
    username : null
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'LOGIN_SUCCESS' :
            return {
                ...state,
                loggedIn: true,
                username: action.payload.username
            }
        default:
            return state;
    }
};

const store = createStore(rootReducer);

store.subscribe( () => {
    console.log('subscription', store.getState())
});

var actionLoginSuccess = {
    type: 'LOGIN_SUCCESS',
    payload: {username: 'Andrea'}
};

store.dispatch(actionLoginSuccess);


console.log('after dispatch' , store.getState());