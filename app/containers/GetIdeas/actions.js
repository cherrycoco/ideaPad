/**
 * Add the idea, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_IDEA
 */
export function loadIdeas() {
  return {
    type: 'LOAD_IDEA',
  };
}

/**
 * Dispatched when the idea is successfully added by the request saga
 *
 * @return {object}      An action object with a type of LOAD_IDEA_SUCCESS
 */
export function ideasLoaded(ideas) {
  return {
    type: 'LOAD_IDEA_SUCCESS',
    ideas,
  };
}

/**
 * Dispatched when adding the idea fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_IDEA_ERROR passing the error
 */
export function ideasLoadingError(error) {
  return {
    type: 'LOAD_IDEA_ERROR',
    error,
  };
}
