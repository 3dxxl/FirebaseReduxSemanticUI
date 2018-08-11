import {initialState} from './MeinStore';


 

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "istImSystem": 
        
            return {

             

                ...state, 
                //istEingeloggt: alert("hallo"),
                istEingeloggt: "blue",
               
               
                
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