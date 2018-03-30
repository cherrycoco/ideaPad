import { fromJS } from 'immutable';

import ideasReducer from '../reducer';
import {
  loadIdeas,
  ideasLoaded,
  ideasLoadingError,
} from '../actions';

describe('ideasReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      success: false,
      allIdeas: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(ideasReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadIdeas action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .set('success', false);

    expect(ideasReducer(state, loadIdeas())).toEqual(expectedResult);
  });

  it('should handle the ideasLoaded action correctly', () => {
    const fixture = [{
      id: 'heislf',
      subject: 'My Test',
      text: 'testing',
    }];
    const expectedResult = state
      .set('loading', false)
      .set('succcess', true)
      .set('allIdeas', fixture);

    expect(ideasReducer(state, ideasLoaded(fixture))).toEqual(expectedResult);
  });

  it('should handle the ideasLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(ideasReducer(state, ideasLoadingError(fixture))).toEqual(expectedResult);
  });
});
