import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading...</div>
    }

    return (
        <div className="video-detail ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    );
}

export default VideoDetail;