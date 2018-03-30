/**
 * Tests for loadIdeas sagas
 */

import { put, takeLatest } from 'redux-saga/effects';
import { ideasLoadingError } from '../actions';

import root, { loadIdeas } from '../saga';

const testData = [{
  id: 'test',
  subject: 'test',
  text: 'test',
}];

/* eslint-disable redux-saga/yield-effects */
describe('loadIdeas Saga', () => {
  const loadIdeasGenerator = loadIdeas();

  it('should dispatch the ideasLoaded action if it requests the data successfully', () => {
    expect(loadIdeasGenerator.next().value).toMatchSnapshot();
    expect(loadIdeasGenerator.next(testData).value).toMatchSnapshot();
  });

  it('should call the ideasLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = loadIdeasGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(ideasLoadingError(response)));
  });
});

describe('loadIdeas Saga', () => {
  const rootSaga = root();

  it('should start task to watch for LOAD_IDEA action', () => {
    const takeLatestDescriptor = rootSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest('LOAD_IDEA', loadIdeas));
  });
});
