// this is what the data layer initally looks like, which is a user that isn't logged in which is null.
export const initialState = {
  user: null,
};

// this is dispatching an action into the data layer
export const actionTypes = {
  SET_USER: "SET_USER",
};

// if you recieve an action to set an user for example, it will return whatever it currently looks like but with the user changed to whatever we passed in for the user. 
const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
      default:
        return state;
  }
};

export default reducer; 