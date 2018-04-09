import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import _ from 'lodash';
import { addIdea, updateSubject, updateText } from './actions';
import { makeSelectSubject, makeSelectText, makeSelectError } from './selectors';
import Form from './Form';
import CenteredSection from './CenteredSection';
import Button from './Button';
import Textarea from './Textarea';
import H2 from '../../components/H2/index';
import Input from './Input';
import saga from './saga';

const Home = ({ subject, text, error, dispatch }) => {

  const errorRender = () => (
    <H2>{"Oops, that's embarrassing...we might have a bug somewhere!"}</H2>
  );

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <Form>
        <label htmlFor="idea">
          <H2>HAVE AN IDEA?</H2>
          <H2>WE WILL HELP YOU KEEP TRACK!</H2>
          <CenteredSection>
            <Input
              placeholder="Subject"
              id="subject"
              value={subject}
              onChange={(e) => {
                dispatch(updateSubject(e.target.value));
              }}
            >
            </Input>
            <Textarea
              rows="7"
              cols="45"
              id="note"
              type="text"
              value={text}
              placeholder="simply jot down your idea here..."
              onChange={(e) => {
                dispatch(updateText(e.target.value));
              }}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                const escapedText = _.escape(text);
                const escapedSubject = _.escape(subject);
                dispatch(addIdea(escapedText, escapedSubject));
              }}
            >ADD TO IDEA BANK</Button>
            { error ? errorRender() : <div /> }
          </CenteredSection>
        </label>
      </Form>
    </div>
  );
};

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  subject: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

// map state to props by calling selector functions
const mapStateToProps = createStructuredSelector({
  error: makeSelectError(),
  subject: makeSelectSubject(),
  text: makeSelectText(),
});

// map dispatch function to props
const mapDispatchToProps = (dispatch) => ({ dispatch });

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withSaga,
  withConnect,
)(Home);
