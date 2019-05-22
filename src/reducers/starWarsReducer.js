import /* we need our action types here*/ 
{
  FETCHING,
  FAILURE,
  SUCCESS,
} from "../actions";

const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {...state, fetching: true};
    case FAILURE:
      return {...state, fetching: false};
    case SUCCESS:
      return {
        ...state,
        characters: [...state.characters, ...action.payload],
        fetching: false,
      };
    default:
      return state;
  }
};
