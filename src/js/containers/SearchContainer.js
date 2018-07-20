import { connect } from 'react-redux';
import Search from '../components/Hompage/Search';
import { searchInputChange, pressEnter, filterData } from  '../actions/opendataActions';
import Scroll from 'react-scroll';

const mapStateToPorps = ({ opendataReducer }) => {
  // 把全部的資料存進pops裡面
  return {
    text: opendataReducer.query,
    chips: opendataReducer.chips,
  }
};

const mapDispatchToProps = dispatch => ({
  onChangeSearchInput: event => {
    dispatch(searchInputChange(event.target.value));
  },
  onEnter: event => {
    if(event.target.value.length !== 0)
      dispatch(pressEnter(event.target.value));
    else {
      dispatch(searchInputChange(''));
      Scroll.scroller.scrollTo('ResultBox', {
        delay: 0,
        smooth: true,
      });
    }
  },
  onClickSubmit: queries => {
    console.log("inclick",queries);
    dispatch(filterData(queries));
  }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => (
  Object.assign({}, stateProps, {
    onChangeSearchInput: dispatchProps.onChangeSearchInput,
    onEnter: dispatchProps.onEnter,
    onClickSubmit: () => dispatchProps.onClickSubmit(stateProps.chips),
  }, ownProps)
);

export default connect(
  mapStateToPorps,
  mapDispatchToProps,
  mergeProps,
)(Search);
