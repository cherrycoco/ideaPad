import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Idea from '../Idea/index';
import CenteredSection from '../../containers/Home/CenteredSection';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

function Ideas({ classes, ideas }) {
  return (
    <CenteredSection className={classes.root}>
      {ideas.map((idea) =>
        <Idea key={idea.id} idea={idea} />
      )}
    </CenteredSection>
  );
}

Ideas.propTypes = {
  classes: PropTypes.object.isRequired,
  ideas: PropTypes.array.isRequired,
};

export default withStyles(styles)(Ideas);
