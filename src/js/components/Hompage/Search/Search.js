import React from 'react';
import '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import { Element, Link as ScrollLink } from 'react-scroll';

export default props => {
  return (
    <div>
      <Element name="Search">
        <section className="section Search" >
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
              <ScrollLink 
                to="ResultBox"
                spy={true} 
                smooth={true} 
                duration={500} >
                  <Button color="inherit">
                    Enter
                  </Button> 
              </ScrollLink>
            </div>

          </CardMedia>

        </section>
      </Element>
    </div>
  );
};

