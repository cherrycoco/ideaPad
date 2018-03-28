// import React from 'react';

// const Idea = ({ text }) => (
//   <li>{text}</li>
// );

// export default Idea;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import H3 from '../H3/index';
import P from '../P/index';
import ExpandIcon from './ExpandIcon';

const styles = () => ({
  root: {
    width: '70vw',
  },
});

const Idea = ({ classes, idea }) => (
  <ExpansionPanel className={classes.root}>
    <ExpansionPanelSummary expandIcon={ExpandIcon()}>
      <H3>{idea.subject}</H3>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <P>{idea.text}</P>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

export default withStyles(styles)(Idea);

