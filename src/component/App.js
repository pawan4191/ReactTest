import React from 'react';
import SearchBar from './SearchBar';
import Unplash from './Unplash';

class App extends React.Component{
    state = {image : []};
    onSearchSubmit= async (term)=>{
        console.log(term)
        const response = await Unplash.get('/search/photos',{
            params : {query : term}
        });

        this.setState({image : response.data.results})
    }
    render(){
        return <div>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            found : {this.state.image.length}
            </div>
    }
}

export default App;