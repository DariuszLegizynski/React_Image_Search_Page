import React from "react";

class SearchBar extends React.Component {
    state = { term: ""};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    };

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            value={this.state.term}   // value will be shown as text in the input field
                            onChange={e => this.setState({term: e.target.value})}
                            placeholder="Search"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;