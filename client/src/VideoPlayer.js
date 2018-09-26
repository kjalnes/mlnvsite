import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Player extends Component {
  render () {
    const { video } = this.props;
    return <ReactPlayer
        url={video}
        playing
        playbackRate='2'
        width='100%'
        height='100%'
    />
  }
}

export default Player;
