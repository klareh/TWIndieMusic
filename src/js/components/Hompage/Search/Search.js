import React from 'react';
import '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

export default props => {
  return (
    <div>
      <section className="section">

        <CardMedia
          image={require('../../../../images/bgImg.jpg')}
          className="sectionBG"
        >
        <div className="searchBox">
            <FormControl>
              <InputLabel>
                想找哪邊的呢？
              </InputLabel>
              <Input />
            </FormControl>
            <Button color="inherit">
              Enter
            </Button>
        </div>
    
        </CardMedia>

      </section>
    </div>
  );
};

