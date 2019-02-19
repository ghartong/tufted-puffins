import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import './player.css'

class Player extends Component {
  state = {
    url: './music/Wrong-Side-Of-Heaven.mp3',
    controls: true,
    playing: false
  }

  load = (url) => {
    this.setState({
      url,
      playing: true
    })
  }

  renderLoadButton = (url, label) => {
    return (
      <button type="button" onClick={() => this.load(url)}>
        {label}
      </button>
    )
  }

  ref = (player) => {
    this.player = player
  }

  render() {
    const { url, controls, playing } = this.state

    return (
      <div>
        <div className="PlayList">
          <ul>
            <li>{this.renderLoadButton('./music/Wrong-Side-Of-Heaven.mp3', 'Wrong Side of Heaven')}</li>
            <li>{this.renderLoadButton('./music/Wrong-Side-Of-Heaven.1.mp3', 'Righteous Side of Hell')}</li>
            <li>{this.renderLoadButton('https://www.youtube.com/watch?v=ysz5S6PUM-U', 'Some Video')}</li>
          </ul>
        </div>
        <div>Playing: {url}</div>

        <ReactPlayer
            url={url}
            controls={controls}
            className="react-player"
            width="400px"
            height="100px"
            playing={playing}
        />
      </div>
    )
  }
}

export default Player
