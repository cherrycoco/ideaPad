import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Idea from '../Idea/index';
import CenteredSection from '../../containers/Home/CenteredSection';
import LoadingIndicator from '../LoadingIndicator/index';
import H2 from '../H2/index';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
});

class Ideas extends React.Component {
  componentWillMount() {
    // dispatch the 'LOAD_IDEA' action
    this.props.onMount();
  }
  render() {
    const { classes, ideas, error } = this.props;

    // if error from fetching ideas => render error message
    if (error) {
      return (
        <div>
          <H2>Oops... we are currently experiencing technical difficulties, please try again!</H2>
        </div>
      );
    }

    // if there are no ideas => render the no ideas message
    if (ideas.length === 0) {
      return (
        <div>
          <H2>{"You haven't jotted any ideas down yet!"}</H2>
        </div>
      );
    }

    // if loading => render loading circle otherwise render ideas in descending order by timestamp
    return (
      ideas === false ?
        <LoadingIndicator /> :
        <CenteredSection className={classes.root}>
          {ideas.map((idea) =>
            <Idea key={idea.id} idea={idea} />
          )}
        </CenteredSection>
    );
  }
}

Ideas.propTypes = {
  classes: PropTypes.object.isRequired,
  ideas: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.bool,
  ]),
  error: PropTypes.bool.isRequired,
  onMount: PropTypes.func.isRequired,
};

export default withStyles(styles)(Ideas);
