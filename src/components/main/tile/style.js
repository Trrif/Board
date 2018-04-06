import Styled from 'styled-components'

export const TileStyle = Styled.div`
height: 100px;
width: 100px;
transition: transform 1s;
background-color: ${props => props.color};
  &:hover{
    transform: scale(1.11, 1.11);
  }
transform: scale(${props => props.toggled ? '1.11' : '1'}, ${props => props.toggled ? '1.11' : '1'})
`
