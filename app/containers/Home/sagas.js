/**
 * Post the ideas by the user to the Database
 */

import { call, put, select, takeEvery, fork } from 'redux-saga/effects';
// import { LOAD_REPOS } from 'containers/App/constants';
// import { reposLoaded, repoLoadingError } from 'containers/App/actions';
import axios from 'axios';

// import request from 'utils/request';
// import { makeSelectUsername } from 'containers/HomePage/selectors';


const postIdea = (id, subject, text) => {
  axios.post('/api/ideas', { id, subject, text })
  .then((res) => res)
  .catch((err) => console.log('error from post to idea', err));
};


function* callPostIdea({ id, subject, text }) {
  console.log('got in here');
  const result = yield call(postIdea, id, subject, text);
  if (result) {
    console.log('result', result);
  }
}

function* postIdeaSaga() {
  yield takeEvery('ADD_IDEA', callPostIdea);
}

export default function* root() {
  yield [
    fork(postIdeaSaga),
  ];
}

// /**
//  * Github repos request/response handler
//  */
// export function* getRepos() {
//   // Select username from store
//   const username = yield select(makeSelectUsername());
//   const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

//   try {
//     // Call our request helper (see 'utils/request')
//     const repos = yield call(request, requestURL);
//     yield put(reposLoaded(repos, username));
//   } catch (err) {
//     yield put(repoLoadingError(err));
//   }
// }

// /**
//  * Root saga manages watcher lifecycle
//  */
// export default function* githubData() {
//   // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
//   // By using `takeLatest` only the result of the latest API call is applied.
//   // It returns task descriptor (just like fork) so we can continue execution
//   // It will be cancelled automatically on component unmount
//   yield takeLatest(LOAD_REPOS, getRepos);
// }