import {initialState} from './MeinStore';


 

export const reducer = (state = initialState, action) => {

    switch(action.type) {

        case "istImSystem": 
        
            return {

             

                ...state, 
                //istEingeloggt: alert("hallo"),
                istEingeloggt: "blue",
                istAusgeloggt: false
               
                
            };

        case "istNichtImSystem": 

            return {
                ...state,
                istAusgeloggt: true,
                


                    
                };

            

        default:

            return state

    }
}