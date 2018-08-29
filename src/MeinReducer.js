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


        case "gradWirdErhöht": 

        return {
          //  ...state, 
            grad: state.grad + 0.10,
            data:action.data?action.data:null
            
           };

          

            

        default:

            return state

    }
}