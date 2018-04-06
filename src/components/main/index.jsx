import React from 'react'
import { Grid, Container, Win, Counter } from './style'
import Tile from './tile/index.jsx'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.toggleTile = this.toggleTile.bind(this)

    const BOARD_SIZE = 4
    const EQUAL_COLORS = 2
    const COLORS = [
      'green',
      'blue',
      'red',
      'violet',
      'orange',
      'purple',
      'aqua',
      'aquamarine'
    ]

    function fillArrayByColors (equalColors, boardSize, colors) {
      let arrrayOfColors = []
      const countOfUniqColors = boardSize * boardSize / equalColors
      for (let i = 0; i < countOfUniqColors; i++) {
        const color = colors[i]
        for (let j = 0; j < equalColors; j++) {
          arrrayOfColors.push(color)
        }
      }
      return arrrayOfColors
    }
    function shuffleArray (array) {
      let shuffledArray = [...array]
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = shuffledArray[i]
        shuffledArray[i] = shuffledArray[j]
        shuffledArray[j] = temp
      }
      return shuffledArray
    }

    let colors = fillArrayByColors(EQUAL_COLORS, BOARD_SIZE, COLORS)

    colors = shuffleArray(colors)

    this.state = {
      BOARD_SIZE,
      colors,
      selectedTile: {},
      countOfPairs: BOARD_SIZE * BOARD_SIZE / EQUAL_COLORS,
      pairsFounded: 0,
      isGameFinished: false
    }
  }

  toggleTile (tile) {
    let selectedTile = this.state.selectedTile
    if (!tile.state.pairFounded) {
      if (selectedTile.props !== undefined) {
        if (selectedTile.props.id !== tile.props.id) {
          tile.setState({toggled: true})
          if (selectedTile.props.color === tile.props.color) {
            tile.setState({toggled: true, pairFounded: true})
            selectedTile.setState({toggled: true, pairFounded: true})
            this.setState({selectedTile: {}, pairsFounded: this.state.pairsFounded + 1})
            if (this.state.countOfPairs - 1 === this.state.pairsFounded) {
              this.setState({isGameFinished: true})
            }
          } else {
            this.setState({selectedTile: {}})
            setTimeout(() => {
              tile.setState({toggled: false})
              selectedTile.setState({toggled: false})
            }, 500)
          }
        }
      } else {
        tile.setState({toggled: true})
        this.setState({selectedTile: tile})
      }
    }
  }
  render () {
    return <Container>
      <Grid boardSize={this.state.BOARD_SIZE}>
        {this.state.colors.map((color, index) => {
          return <Tile toggleTile={this.toggleTile} id={index} key={index} color={color}></Tile>
        })}
      </Grid>
      <Counter> Найдено {this.state.pairsFounded} из {this.state.countOfPairs} </Counter>
      <Win> {this.state.isGameFinished ? 'Вы выиграли!' : ''} </Win>
    </Container>
  }
}
