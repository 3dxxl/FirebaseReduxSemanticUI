
//drittens für eine asyncrone Gestaltung, 
export const fetchClients = (dispatch) => {
    //Hier hole ich den Array aus fer Firebase raus
    fetch("https://reactsema.firebaseio.com/clients.json")
    
    .then(res => res.json())
    .then(
    (res) => {
    
    dispatch({
        type: "gradWirdErhöht",
        data:res,
    });

    console.log("Fresh");
    
    })
    }
    
    //zweitens
    const asyncAction = () => {
    return (dispatch) =>{
    
    fetchClients(dispatch);

    console.log("Läuft bei dir")
    }
    }


export const actionCreators = {

        einLoggAction:(event) => {
            return {
                type: "istImSystem"
            };
        },

        ausLoggAction: (event) => {
            return {
                type: "istNichtImSystem"
            }; 
        },

        //Erstens
        asyncBaby: (event) => {
            return (dispatch) => {
            dispatch(asyncAction())
           }
         }   

}