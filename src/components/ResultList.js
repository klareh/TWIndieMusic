import React from 'react';
import {
  Card, CardMedia, CardText, CardHeader,
} from 'material-ui/Card';

export default props => (
  <div>

    {props.data ? props.data.map(ele => (
      <Card style={{
        maxWidth: 345,
      }}
      >
        <CardMedia
          image={ele.imageUrl.replace(/^http:\/\//, 'https://')}
          style={{
            height: 0,
            paddingTop: '56.25%',
          }}
        />
        { (ele.imageUrl != '') ? (
          <CardHeader
            avatar={ele.imageUrl.replace(/^http:\/\//, 'https://')}
            title={ele.title}
          />) : (
          <CardHeader
            title={ele.title}
          />)}
          <CardText>
            時間：
            {ele.showInfo[0] ? ele.showInfo[0].time : ele.startDate}
          </CardText>
      </Card>
    )) : (
      <Card>
        <CardText>
          wait...
        </CardText>
      </Card>
    )
    }

  </div>
);
