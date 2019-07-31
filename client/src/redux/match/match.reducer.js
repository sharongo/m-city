import MatchActionTypes from './match.types'

const INITIAL_STATE = {
    matches: []
  };


  const matchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case MatchActionTypes.GET_MATCHES_SUCCESS:
        return {
          ...state,
          matches: action.payload
        }
      default:
        return state;
    }
  };
  
  export default matchReducer;