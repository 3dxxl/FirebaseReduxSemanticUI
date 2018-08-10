import {createStore} from 'redux';
import {reducer} from './MeinReducer';

export const initialState = {

    istEingeloggt: "red",
    fireStart:"",
    /*  email:'',
    password:''  */ 


    


};




//wichtig: zuerst der reducer dann der initialState = createStore(initialState, reducer, ...)
export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
