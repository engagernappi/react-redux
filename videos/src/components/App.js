import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchBarSubmit = term => {
        console.log(term);
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchBarSubmit} />
            </div>
        );
    }
}

export default App;