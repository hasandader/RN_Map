import { ADD_PLACES, GET_PLACES, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  locations: []
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PLACES:
    return {
      ...state,
      locations: state.locations.concat({
        placeName: action.placeName,
        location: action.location,
        key: Math.random()
      })
    };
    case DELETE_PLACE:
    return {
      ...state,
      locations: state.locations.filter(location => {
        return location.key !== action.key;
      })
    };
    default:
      return state;
  }
};

export default reducer;
