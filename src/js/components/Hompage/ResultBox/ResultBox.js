import React from 'react';
import '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ResultUnit from './ResultUnit';
import ListItem from '@material-ui/core/ListItem';

class ResultBox extends React.Component {
    render() {
        let props = this.props;
        return (
            <div>
                <section className="section ResultBox">
                    {this.getResultOfDay()}
                    <Paper>
                        <Grid container spacing={8}
                            justify="flex-end"
                            style={{ padding: 20 }}>
                            <Grid item md={1} sm={2} xs={4} >
                                <Button onClick={props.onClickNext}>
                                    Next
                                </Button>
                            </Grid>
                            <Grid item lg={1} sm={2} xs={4} >
                                <Button onClick={props.onClickFront}>
                                    Front
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>

                </section>
            </div>
        );
    }

    getResultOfDay() {
        return this.props.show.map((resultOfThePage, i) => (
            <Paper key={i}>
                <Grid container spacing={24} justify="flex-start" style={{ padding: 20 }}>
                    <Grid item md={2} sm={3} xs={12} style={{ textAlign: 'end' }}>
                        <ListItem >
                            <Button variant="contained" color="primary">
                                {resultOfThePage[0].time.split(" ")[0]}
                            </Button>
                        </ListItem>
                    </Grid>
                    <Grid item sm={10} sm={9} xs={12} >
                        {this.getResultUnit(resultOfThePage)}
                    </Grid>
                </Grid>
            </Paper>
        ))
    }

    getResultUnit(resultOfThePage) {
        return resultOfThePage.map(e => (
            <ResultUnit key={e.uid}
                city={e.location.slice(0, 2)}
                title={e.title}
                price={e.price}
                locationName={e.locationName} />
        ));
    }
};

export default ResultBox;