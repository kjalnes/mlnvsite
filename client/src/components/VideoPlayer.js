import React from 'react';
import ReactPlayer from 'react-player'

const Player = ({ video }) => {
    return (
        <ReactPlayer
            url={video}
            playing
            playbackRate='3'
            width='100%'
            height='100%'
        />
    );
}

export default Player;
