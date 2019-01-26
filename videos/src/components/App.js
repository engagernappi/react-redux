import React from 'react';
import youtube from '../apis/youtube'
import SearchBar from './SearchBar';

class App extends React.Component {
    onSearchBarSubmit = async term => {
        const resolve = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(resolve.data);
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