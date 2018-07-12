import { connect } from 'react-redux';
import ResultList from '../components/ResultList';

const mapStateToPorps = ({ opendataReducer }) => ({
  data: opendataReducer.payload.data,
});

export default connect(
  mapStateToPorps,
)(ResultList);
