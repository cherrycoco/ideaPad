/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectIdeas = (state) => state.get('ideas');

// select allIdeas from ideas
const makeSelectIdeas = () => createSelector(
  selectIdeas,
  (ideasState) => ideasState.get('allIdeas')
);

// select loading from ideas
const makeSelectLoading = () => createSelector(
  selectIdeas,
  (ideasState) => ideasState.get('loading')
);

// select error from ideas
const makeSelectError = () => createSelector(
  selectIdeas,
  (ideasState) => ideasState.get('error')
);

// select success from ideas
const makeSelectSuccess = () => createSelector(
  selectIdeas,
  (ideasState) => ideasState.get('success')
);

export {
  selectIdeas,
  makeSelectIdeas,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
};
