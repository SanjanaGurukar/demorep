import React, { Component } from 'react';
export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    render() {
        return ( <div> < label htmlFor = "search" >Search the web
             <input id = "search"/>
            <button onClick = { event => this.onInputChange(search.value) }>Search</button>  
            </label > 
            </div> 
        )
    }
        onInputChange(search) {
            this.setState({ search })
            this.props.onSearchTermChange(search);
        }
    }