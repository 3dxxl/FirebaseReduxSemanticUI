import {createStore} from 'redux';
import {reducer} from './MeinReducer';

export const initialState = {

    istEingeloggt: false

};


export const store = createStore(initialState, reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
