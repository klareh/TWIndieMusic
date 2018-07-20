import { connect } from 'react-redux';
import FetchOpenData from '../components/FetchOpenData';
import { getOpendata } from '../actions/opendataActions';

const mapStateToPorps = ({ opendataReducer }) => {
  //console.log(opendataReducer.payload);

  return {
    data: '',
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSubmit: () => dispatch(getOpendata()),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, dispatchProps, ownProps)
);

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
  mergeProps,
)(FetchOpenData);
