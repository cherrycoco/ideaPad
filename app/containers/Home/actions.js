import { v4 } from 'node-uuid';

/**
 * Add the idea, this action starts the request saga
 *
 * @return {object} An action object with a type of ADD_IDEA
 */
export function addIdea(text, subject) {
  return {
    type: 'ADD_IDEA',
    id: v4(),
    subject,
    text,
  };
}

/**
 * Dispatched when the idea is successfully added by the request saga
 *
 * @return {object}      An action object with a type of ADD_IDEA_SUCCESS
 */
export function ideaAdded() {
  return {
    type: 'ADD_IDEA_SUCCESS',
  };
}

/**
 * Dispatched when adding the idea fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of ADD_IDEA_ERROR passing the error
 */
export function ideaAddingError(error) {
  return {
    type: 'ADD_IDEA_ERROR',
    error,
  };
}
