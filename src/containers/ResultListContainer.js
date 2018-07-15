import { connect } from 'react-redux';
import ResultList from '../components/ResultList';

const mapStateToPorps = ({ opendataReducer }) => {
  let retDat = undefined;
  const googlMapUrlPreset = "https://www.google.com/maps/search/?api=1&query=";
  const googlUrlPreset = "https://www.google.com/search?q=";
  console.log("rL", opendataReducer);
  if (opendataReducer.payload.data) {
    retDat = [];
    
    opendataReducer.payload.data.map( ele => {
      let retEle = {
        title: ele.title,
        imageUrl: ele.imageUrl,
        time: (ele.showInfo.length > 0) ? ele.showInfo[0].time : ele.startDate,
        uid: ele.UID,
        price: (ele.showInfo.length > 0) ? ele.showInfo[0].price : "未提供資訊，請查看活動官網",
        locationName: (ele.showInfo.length > 0) ? ele.showInfo[0].locationName : "未提供資訊，請查看活動官網",
        location: (ele.showInfo.length > 0) ? ele.showInfo[0].location : "未提供資訊，請查看活動官網",
        mapUrl: (ele.showInfo.length > 0) ? googlMapUrlPreset + ele.showInfo[0].locationName.split(' ').join('+') : "",
        googleUrl: googlUrlPreset + ele.title.split(' ').join('+'),
      }
      retDat.push(retEle);
    });
    console.log("in", retDat);
    retDat.sort((a, b) => {
      let aDate = new Date(a.time);
      let bDate = new Date(b.time);
      
      if (aDate < bDate) return -1;
      if (aDate > bDate) return 1;
      return 0;
    });
  }
  console.log("ret", retDat);
  return {
    data: retDat,
  };
};


export default connect(
  mapStateToPorps,
)(ResultList);
