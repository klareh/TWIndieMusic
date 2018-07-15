import React from 'react';
import PropTypes from 'react-proptypes';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from  '@material-ui/icons/Search';


const InfoBpx = props => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant='headline' style={{fontSize: 20}}>
            {props.data.title}
            <IconButton
            style={{ width: 28 , height: 28, margin: 5}}
            component='span'
            onClick={ () => window.open(props.data.googleUrl)}>
            <SearchIcon style={{ fontSize: 18 }}/>
          </IconButton>
          </Typography>
         
          <Typography>
            {props.data.time}
          </Typography>
          <Typography>
            {props.data.price}
          </Typography>
          <Typography>
            {props.data.location}
          </Typography>
          <Button
            variant='contained'
            color='primary'
            onClick={ () => window.open(props.data.mapUrl) }>
            {props.data.locationName}
          </Button>
        </CardContent>
        {(props.data.imageUrl != '') ? (
          <div>
            <CardMedia
              image={props.data.imageUrl.replace(/^http:\/\//, 'https://')}
              style={{ height: 0, paddingTop: '40.25%'}}/>
          </div>
        ) : ""}
      </Card>
    </div>
)};

InfoBpx.proptypes = {
  data: PropTypes.Objects,
};

export default InfoBpx;
