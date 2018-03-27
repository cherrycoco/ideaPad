const idea = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return {
        id: action.id,
        text: action.text,
      };
    default:
      return state;
  }
};

const ideas = (state = [], action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [...state, idea(undefined, action)];
    default:
      return state;
  }
};

export default ideas;
