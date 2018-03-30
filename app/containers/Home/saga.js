/**
 * Post the ideas by the user to the Database
 */


import { call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { ideaAdded, ideaAddingError } from './actions';
import { makeSelectCurrentIdea } from './selectors';

/**
 * get /API/ideas request/response handler
 */

const postIdea = (idea) => {
  axios.post('/api/ideas', idea);
};

function* callPostIdea() {
  const currentIdea = yield select(makeSelectCurrentIdea());

  try {
    yield call(postIdea, currentIdea);
    yield put(ideaAdded());
  } catch (err) {
    yield put(ideaAddingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* root() {
  // Watches for ADD_IDEA actions and calls addIdea when one comes in.
  // By using `takeEvery` the result of every call will be applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeEvery('ADD_IDEA', callPostIdea);
}
