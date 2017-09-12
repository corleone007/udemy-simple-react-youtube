import React from 'react';

class SearchBar extends React.Component {
    // 1. onInputChange(event) {
    //     console.log(event.target.value);
    // }
    constructor(props) {
        super(props);
        this.state ={searchString:''};
    }

    onInputChange(term) {
        this.setState({searchString:term});
        this.props.onSearchTermChange(term);
    }

    render() {
        // 1. return <input onChange={this.onInputChange}/>;
        // 2. return <input onChange={(event) => console.log(event.target.value)}/>;
        return (
            <div className="search-bar">
            <input
            value={this.state.searchString}
            onChange={(event) => this.onInputChange(event.target.value)}/>
            {/* <br/>
            <h3>Value of input : {this.state.searchString}</h3> */}
            </div>
        );
    }
}

export default SearchBar;