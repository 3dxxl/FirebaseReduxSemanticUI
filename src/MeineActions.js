export const actionCreators = {

        einLoggAction:(event) => {
            return {type: "istImSystem"};
        },

        ausLoggAction: (event) => {
            return {type: "istNichtImSystem"}; 
        },

        gradErhöhen: (event) => {
            return {type: "gradWirdErhöht"}; 
        },

}