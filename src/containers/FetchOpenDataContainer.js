import { connect } from 'react-redux';
import FetchOpenData from '../components/FetchOpenData';
import { getOpendata } from '../actions/opendataActions';

const mapStateToPorps = ({ opendataReducer }) => {
  console.log(opendataReducer.payload.data);
  if (opendataReducer.payload.data) {
    opendataReducer.payload.data.sort((a, b) => {
      let aDate = 0;
      let bDate = 0;

      if (a.showInfo.length > 0) aDate = new Date(a.showInfo[0].time);
      else if (a.startDate) aDate = new Date(a.startDate);
      else return 0;

      if (b.showInfo.length > 0) bDate = new Date(b.showInfo[0].time);
      else if (b.startDate) bDate = new Date(b.startDate);
      else return 0;

      if (aDate < bDate) return -1;
      if (aDate > bDate) return 1;
      return 0;
    });
    // console.log(opendataReducer.data);
  }
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
