import { combineReducers } from "redux";

const idea = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return {
        id: action.id,
        subject: action.subject,
        text: action.text,
      };
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return {...state, 
        [action.id]: idea(state[action.id], action)};
    default:
      return state;
  }
};

const list = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [...state, action.id];
    default:
      return state;
  }
};

const ideas = combineReducers({
  byId,
  list,
});

export default ideas;
