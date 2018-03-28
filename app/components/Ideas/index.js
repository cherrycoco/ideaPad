// import React from 'react';


// const Ideas = ({ ideas }) => (
//   <ul>
//     {ideas.map((idea) =>
//       (<Idea
//         key={idea.id}
//         {...idea}
//       />)
//     )}
//   </ul>
// );

// export default Ideas;

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

function SimpleExpansionPanel({ classes, ideas }) {
  return (
    <CenteredSection className={classes.root}>
      {ideas.map((idea) =>
        <Idea key={idea.id} idea={idea} />
      )}
    </CenteredSection>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);