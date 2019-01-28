import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ onVideoSelect, videos }) => {
    const renderedList = videos.map((video) => {
        console.log(video.id.videoId);
        return (
            <VideoItem
                key={video.id.videoId}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    })

    return (
        <div className="video-list ui relaxed divided list">{renderedList}</div>
    );
}

export default VideoList;