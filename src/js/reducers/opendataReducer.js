import {
  GET_OPENDATA_SUCCESS,
  GET_OPENDATA_FAIL,
  SEARCH_INPUT_CHANGE,
  SEARCH_INPUT_ENTER,
  FILTER_DATA_SUCCESS,
} from '../constants/action_types';


export default (state = [], action) => {
  console.log('reducer', action.type);
  switch (action.type) {
    case GET_OPENDATA_SUCCESS:
      let temp = [];
      const googlMapUrlPreset = "https://www.google.com/maps/search/?api=1&query=";
      const googlUrlPreset = "https://www.google.com/search?q=";


      action.payload.data.map(ele => {
        let retEle = {
          title: ele.title,
          imageUrl: ele.imageUrl,
          uid: ele.UID,
          googleUrl: googlUrlPreset + ele.title.split(' ').join('+'),
        }
        if (ele.showInfo.length > 0) {
          retEle = {
            ...retEle,
            time: ele.showInfo[0].time,
            price: ele.showInfo[0].price,
            locationName: ele.showInfo[0].locationName,
            location: ele.showInfo[0].location,
            mapUrl: googlMapUrlPreset + ele.showInfo[0].locationName.split(' ').join('+'),
          }
        }else {
          return;
        }
        temp.push(retEle);
      });

      temp.sort((a, b) => {
        let aDate = new Date(a.time);
        let bDate = new Date(b.time);

        if (aDate < bDate) return -1;
        if (aDate > bDate) return 1;
        return 0;
      });

      return {
        data: [...temp],
        query: action.payload.query,
        chips: [...state.chips],
        show: [...state.show],
      };
    case GET_OPENDATA_FAIL:
      console.error('[GET_OPENDATA_FAIL ERROR MSG]:', action.payload.errmsg)
      return state;
    case SEARCH_INPUT_CHANGE:
      return {
        data: [...state.data],
        query: action.payload.query,
        chips: [...state.chips],
        show: [...state.show],
      };
    case SEARCH_INPUT_ENTER:
      return {
        data: [...state.data],
        query: '',
        chips: [...state.chips, action.payload.query],
        show: [...state.show],
      };
    case FILTER_DATA_SUCCESS:
      const queries = action.payload.queries;
      const filterDat = state.data.filter(e => {
        for (let i in queries) {
          if (e.location != undefined && e.location.lastIndexOf(queries[i]) != -1)
            return true
        }
        return false;
      });
      console.log("state", state.data);
      let rDat = [];
      let tmp = null;
      filterDat.map(ele => {
        const t = ele.time.split(" ")[0];
        
        if (tmp != null && t == tmp)
          rDat[ rDat.length - 1 ].push(ele);
        else
          rDat.push([ele]);

        tmp = t;
      });
      console.log("state2", rDat);

      return {
        data: [...state.data],
        query: [...state.query],
        chips: [...state.chips],
        show: [...rDat],
      };
    default:
      return state;
  }
};