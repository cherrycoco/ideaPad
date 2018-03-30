/**
 * Post the ideas by the user to the Database
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ideasLoaded, ideasLoadingError } from './actions';

/**
 * get /API/ideas request/response handler
 */

export function* loadIdeas() {
  try {
    const ideas = yield call(() => axios.get('/api/ideas'));
    yield put(ideasLoaded(ideas.data));
  } catch (err) {
    yield put(ideasLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for GET_IDEAS actions and calls addIdea when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest('LOAD_IDEA', loadIdeas);
}
