import { connect } from 'react-redux';
import Ideas from '../../components/Ideas/index';

const mapStateToProps = (state) => ({
  ideas: state.ideas,
});

const GetIdeas = connect(
  mapStateToProps
)(Ideas);

export default GetIdeas;
