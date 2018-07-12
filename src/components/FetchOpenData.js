import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default (props) => {
  props.onClickSubmit();
  return (
    <div>
      <RaisedButton
        label="載入資料"
        secondary
      />
    </div>
  );
};
