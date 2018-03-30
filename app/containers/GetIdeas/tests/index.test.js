/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
// import { render } from 'enzyme';
// import renderer from 'react-test-renderer';

import Ideas from '../../../components/Ideas/index';
// import H2 from 'components/H2';
// import LoadingIndicator from 'components/LoadingIndicator';
// import GetIdeas from '../index';
import { mapDispatchToProps } from '../index';
import { loadIdeas } from '../actions';

// import { loadIdeas } from '../actions';

describe('<Ideas />', () => {
  it('should render the loading bar', () => {
    const renderedComponent = shallow(
      <Ideas ideas={false} error={false} loading={false} success={false} onMount={() => {}} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render error message', () => {
    const renderedComponent = shallow(
      <Ideas ideas={false} loading={false} success={false} onMount={() => {}} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render empty idea bucket message', () => {
    const renderedComponent = shallow(
      <Ideas ideas={[]} error={false} loading={false} onMount={() => {}} />
    );
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should render fetch the ideas on mount', () => {
    const submitSpy = jest.fn();
    mount(
      <Ideas success={false} ideas={false} error={false} onMount={submitSpy} />
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onMount', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onMount).toBeDefined();
      });

      it('should dispatch loadIdeas when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onMount();
        expect(dispatch).toHaveBeenCalledWith(loadIdeas());
      });
    });
  });
});
