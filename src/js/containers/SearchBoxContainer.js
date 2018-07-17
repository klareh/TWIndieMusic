import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { getOpendata } from '../actions/opendataActions';

const mapStateToPorps = () => ({
  data: '',
});

const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: () => dispatch(getOpendata()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, {}, ownProps)
);

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
  mergeProps,
)(SearchBox);
