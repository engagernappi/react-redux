import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchBarSubmit = async term => {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: 'Client-ID 1f23bb6771ca5025ae8477770f5551133ff39cb7574b7e79e90756f2e8ae19c1'
            },
            params: { query: term }
        });

        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                Found {this.state.images.length} images
            </div>
        );
    }
}

export default App;