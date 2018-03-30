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
    width: '80vw',
    maxWidth: '600px',
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

Idea.propTypes = {
  classes: PropTypes.object.isRequired,
  idea: PropTypes.object.isRequired,
};

export default withStyles(styles)(Idea);

