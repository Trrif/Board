import Styled from 'styled-components'

export const Grid = Styled.div`
display: grid;
grid-template-columns: repeat(${props => props.boardSize}, 100px);
grid-gap: 10px;
`
export const Container = Styled.div`
display: grid;
justify-content: center;
text-align: center;
`
export const Counter = Styled.div`
font-size: 24px
margin-top: 20px;
`
export const Win = Styled.div`
font-size: 24px;
`
export const RestartButton = Styled.a`
padding: 10px;
background-color: gray;
display: inline-block;
color: white;
font-size: 24px;
transition: background-color 1s;
text-decoration: none;
  &:visited {
    color: white;
  }
  &:active {
    background-color: darkgray;
  }
  &:hover {
    background-color: darkgray;
  }
`
