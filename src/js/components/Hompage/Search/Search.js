import React from 'react';
import '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { Link as ScrollLink } from 'react-scroll';

class Search extends React.Component {
    render() {
        let props = this.props;
        return (
            <div>
                <section className="section Search" >
                    <CardMedia className="sectionBG"
                        image={require('../../../../images/bgImg.jpg')}>
                        <div className="searchBox">
                            <FormControl>
                                <InputLabel>請輸入城市名稱</InputLabel>
                                <Input
                                    onKeyDown={event => this.onKeyDown(event)}
                                    onChange={props.onChangeSearchInput}
                                    value={props.text} />
                            </FormControl>
                            {this.getQueryChips()}
                            <ScrollLink
                                to="ResultBox"
                                spy={true}
                                smooth={true}
                                duration={500} >
                                <Button color="inherit" onClick={props.onClickSubmit}>
                                    Enter
                                </Button>
                            </ScrollLink>
                        </div>
                    </CardMedia>
                </section>
            </div>
        );
    }

    onKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.onEnter(event);
            this.props.onClickSubmit(event);
        }
    }

    getQueryChips() {
        return this.props.chips.map((chip, i) => (
            <Chip label={chip} key={i}
                onDelete={() => this.props.onClickDelete(chip)} />
        ));
    }
}


export default Search;

