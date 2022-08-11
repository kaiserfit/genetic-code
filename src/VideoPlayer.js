import React, {Component} from 'react'

export default class VideoPlayer extends Component {
  static propTypes = {
    video: PropTypes.object.isRequired,
  }

  state = {}

  componentDidMount() {
    const {videojs} = global
    if (!videojs) {
      return
    }
    const {video} = this.props
    this.state.player = videojs(video.id)
  }
  componentWillUnmount() {
    if (this.state.player) {
      this.state.player.dispose()
    }
  }

  render() {
    const {video: {id, src, poster}} = this.props
    const videoHtml = `
      <video id="${id}" class="video-js vjs-default-skin" controls
       preload="auto" poster="${poster}"
      >
        <source src="${src}" type="video/mp4" />
        <p class="vjs-no-js">
          To view this video please enable JavaScript
        </p>
      </video>
    `
    return (
      <div dangerouslySetInnerHTML={{__html: videoHtml}}></div>
    )
  }
}