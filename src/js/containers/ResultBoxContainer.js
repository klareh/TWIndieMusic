import { connect } from 'react-redux';
import ResultBox from '../components/Hompage/ResultBox';

const mapStateToPorps = ({ opendataReducer }) => {
  console.log('show', opendataReducer.show);
  return {
    show: opendataReducer.show,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, dispatchProps, ownProps)
);

export default connect(
  mapStateToPorps,
  null,
  mergeProps,
)(ResultBox);
