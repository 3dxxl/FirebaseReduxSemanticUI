import {initialState} from './MeinStore';



import * as firebase from 'firebase';
import {loginUser} from './FirebaseLoggin';





export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "istImSystem": 
        
            return {

             

                ...state, 
                istEingeloggt: "blue"
               // loginUser,
                
            };

        case "istNichtImSystem": 

            return {
                ...state,
                isteingeloggt: false,


                    
                };

            

        default:

            return state

    }
}