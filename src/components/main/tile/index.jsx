import React from 'react'
import { TileStyle } from './style'

export default class Tile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      toggled: true,
      pairFounded: false
    }
    setTimeout(() => this.setState({toggled: false}), 1000)
  }
  render () {
    return <TileStyle
      onClick={() => this.props.toggleTile(this)}
      toggled={this.state.toggled}
      pairFounded={this.state.pairFounded}
      color={this.state.toggled ? this.props.color : 'gray'} />
  }
}
