//applyMiddleware u. compose benötige ich für redux thunk
import {createStore, applyMiddleware, compose} from 'redux';

//thunk benötige ich auch für redux thunk
import thunk from 'redux-thunk';

import {reducer} from './MeinReducer';

//data ist data dazu gekommen, steht für die daten die im server sind
export const initialState = {

    istEingeloggt: "red",
    fireStart:"",
    istAusgeloggt:false,
    grad: 0.00,
    data:0.00

};




//wichtig: zuerst der reducer dann der initialState = createStore(initialState, reducer, ...)
//für redux thunk musste ich erste ein Objekt erstellen composeEnhancer u. diese die dev tools übergeben,
//der grund ist das ich bei der übergabe vom store einen Enhancer(Erweiterung) nur an der dritte stelle darf
//somit kann man die applyMiddleware & thunk als props weitergeben
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk) ) )

