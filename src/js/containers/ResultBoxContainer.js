import { connect } from 'react-redux';
import ResultBox from '../components/Hompage/ResultBox';
import { nextPage, frontPage } from  '../actions/opendataActions';

const mapStateToPorps = ({ opendataReducer }) => {
  return {
    show: opendataReducer.show,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickNext: event => {
    dispatch(nextPage());
  },
  onClickFront: event => {
    dispatch(frontPage());
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, dispatchProps, ownProps)
);

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
  mergeProps,
)(ResultBox);
