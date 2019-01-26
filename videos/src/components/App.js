import React from 'react';
import youtube from '../apis/youtube'
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { videos: [] };

    onSearchBarSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                I have {this.state.videos.length} videos
            </div>
        );
    }
}

export default App;