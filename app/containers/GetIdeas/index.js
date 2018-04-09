import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import Ideas from '../../components/Ideas/index';
import { makeSelectIdeas, makeSelectSuccess, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { loadIdeas } from './actions';

// map the states to props by calling the selector functions
const mapStateToProps = createStructuredSelector({
  ideas: makeSelectIdeas(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

// map dispatch function to props
export const mapDispatchToProps = (dispatch) => ({
  onMount: () => dispatch(loadIdeas()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withReducer = injectReducer({ key: 'ideas', reducer });
const withSaga = injectSaga({ key: 'ideas', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Ideas);
