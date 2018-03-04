import React, {Component} from 'react';
import {Panel, Button, ButtonToolbar, Grid, Row, Col} from 'react-bootstrap';
import {stateToStyle, availableOptions, stateToIcon} from './helper';

export default class ListItem extends Component {

    getOptionButtons(state){
        const options = availableOptions(state);
        console.log(options);
        if (options.length > 0){
            return options.map((item) => (
                    <Button bsSize="small" bsStyle={stateToStyle(item)}>{stateToIcon(item)}</Button>
                ));
        }
        else {
            return null;
        }
    }

    render (){
        return (
            <Panel>
                <Panel.Body>
                    <Grid>
                        <Row className="show-grid">
                            <Col xs={0} md={2}>
                            </Col>
                            <Col xs={8} md={8}>
                                {this.props.name}
                            </Col>
                            <Col xs={2} md={2}>
                                <ButtonToolbar>
                                    {this.getOptionButtons(this.props.state)}
                                </ButtonToolbar>
                            </Col>
                        </Row>
                    </Grid>
                </Panel.Body>
            </Panel>
        ); 
    }
}