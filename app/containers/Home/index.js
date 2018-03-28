import React from 'react';
import { connect } from 'react-redux';
import { addIdea } from './actions';
import Form from './Form';
import CenteredSection from './CenteredSection';
import Button from './Button';
import Textarea from './Textarea';
import H2 from '../../components/H2/index';
import GetIdeas from '../../containers/GetIdeas/index';
import Input from './Input';

let Home = ({ dispatch }) => {
  let text;
  let subject;

  return (
    <div style={{ display: 'flex', height: '80vh' }}>
      <Form>
        <label htmlFor="idea">
          <H2>HAVE AN IDEA?</H2>
          <H2>WE WILL HELP YOU KEEP TRACK!</H2>
          <CenteredSection>
            <Input
              placeholder="Subject"
              innerRef={(node) => { subject = node; }}
            >
            </Input>
            <Textarea
              rows="7"
              cols="45"
              id="note"
              type="text"
              placeholder="simply jot down your idea here..."
              innerRef={(node) => { text = node; }}
            />
            <Button
              onClick={(e) => {
                e.preventDefault();
                dispatch(addIdea(text.value, subject.value));
                text.value = null;
                subject.value = null;
              }}
            >ADD TO IDEA BANK</Button>
          </CenteredSection>
        </label>
      </Form>
      {/* <GetIdeas /> */}
    </div>
  );
};

Home = connect()(Home);

export default Home;
