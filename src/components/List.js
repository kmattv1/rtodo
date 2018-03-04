import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import ListItem from './ListItem';
import {stateToStyle} from './helper';

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {list: []};
    }
    
    componentDidMount() {
        this.setState({list: [
            {name: "a", state: "done"},
            {name: "b", state: "todo"},
            {name: "c", state: null},
            {name: "d", state: "remove"}
        ]});
    }
    
    componentWillUnmount() {
    
    }

    getListElements(){
        if (this.state.list.length > 0){
            return this.state.list.map((item) => (
                <ListGroupItem bsStyle={stateToStyle(item.state)}>
                    <ListItem name={item.name} state={item.state}/>
                </ListGroupItem>));
        }
        else {
            return [];
        }
    }

    render (){
        const list = this.getListElements();
        return (
            <ListGroup>
                { list }
            </ListGroup>
        ); 
    }
}