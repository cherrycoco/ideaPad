import React from 'react';
import { connect } from 'react-redux';
import { addIdea } from './actions';
import Form from './Form';
import CenteredSection from './CenteredSection';
import Button from './Button';
import Textarea from './Textarea';
import H2 from '../../components/H2/index';

let Home = ({ dispatch }) => {
  let input;

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <Form>
        <label htmlFor="idea">
          <H2>Have AN IDEA?</H2>
          <H2>WE WILL HELP YOU KEEP TRACK!</H2>
          <CenteredSection>
            <Textarea
              rows="7"
              cols="45"
              id="note"
              type="text"
              placeholder="simply jot down your idea here..."
              innerRef={(node) => { input = node; }}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addIdea(input.value));
                input.value = null;
              }}
            >ADD TO IDEA BANK</Button>
          </CenteredSection>
        </label>
      </Form>
    </div>
  );
};

Home = connect()(Home);

export default Home;
