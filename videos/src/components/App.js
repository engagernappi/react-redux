import React from 'react';
import youtube from '../apis/youtube'
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import VideoList from './VideoList';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onSearchBarSubmit('buildings');
    }

    onSearchBarSubmit = async term => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        this.setState({ 
            selectedVideo: response.data.items[0],
            videos: response.data.items,
        });
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onSearchBarSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;