import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchBarSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID 1f23bb6771ca5025ae8477770f5551133ff39cb7574b7e79e90756f2e8ae19c1'
            },
            params: { query: term }
        });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
            </div>
        );
    }
}

export default App;