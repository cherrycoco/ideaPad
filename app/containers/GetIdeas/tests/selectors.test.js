import { fromJS } from 'immutable';

import {
  selectIdeas,
  makeSelectIdeas,
  makeSelectLoading,
  makeSelectError,
  makeSelectSuccess,
} from '../selectors';

describe('selectIdeas', () => {
  it('should select the ideas state', () => {
    const ideasState = fromJS({});
    const mockedState = fromJS({
      ideas: ideasState,
    });
    expect(selectIdeas(mockedState)).toEqual(ideasState);
  });
});

describe('makeSelectIdeas', () => {
  const currentUserSelector = makeSelectIdeas();
  it('should select the ideas', () => {
    const test = fromJS([{
      id: 'heislf',
      subject: 'My Test',
      text: 'testing',
    }]);
    const mockedState = fromJS({
      ideas: {
        allIdeas: test,
      },
    });
    expect(currentUserSelector(mockedState)).toEqual(test);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      ideas: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      ideas: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectSuccess', () => {
  const successSelector = makeSelectSuccess();
  it('should select the success', () => {
    const success = false;
    const mockedState = fromJS({
      ideas: {
        success,
      },
    });
    expect(successSelector(mockedState)).toEqual(success);
  });
});

