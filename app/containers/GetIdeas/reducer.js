import { fromJS } from 'immutable';

// The initial state of the Ideas
const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  allIdeas: false,
});

function ideasReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_IDEA':
      return state
        .set('loading', true)
        .set('error', false)
        .set('success', false);
    case 'LOAD_IDEA_SUCCESS':
      return state
        .set('loading', false)
        .set('succcess', true)
        .set('allIdeas', action.ideas);
    case 'LOAD_IDEA_ERROR':
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default ideasReducer;

