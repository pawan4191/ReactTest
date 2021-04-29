import React from 'react';

class SearchBar extends React.Component{
    state = {term : ''};
    onSubmitForm = (event)=>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmitForm}>
                    <label>Image search</label>
                    <input type="text"
                    value={this.state.term}
                    onChange={e => this.setState({term : e.target.value})}
                    />
                </form>
            </div>
        );
    };
}

export default SearchBar;