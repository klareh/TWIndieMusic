import React from 'react';
import '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link as ScrollLink } from 'react-scroll';

export default props => {
  return (
    <div>
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
                <Input
                  onKeyDown={event => {
                    if (event.keyCode === 13) {
                      props.onEnter(event);
                      props.onClickSubmit(event);
                    }
                  }}
                  onChange={props.onChangeSearchInput}
                  value={props.text}
                />

              </FormControl>
              {props.chips.map(chip => (
                <Chip
                  label={chip}
                  onDelete={()=>{}}
                />
              ))}
              <ScrollLink
                to="ResultBox"
                spy={true}
                smooth={true}
                duration={500} >
                <Button color="inherit"
                  onClick={props.onClickSubmit}
                >
                  Enter
                  </Button>
              </ScrollLink>
            </div>

          </CardMedia>

        </section>
    </div>
  );
};

