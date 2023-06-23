// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  //   background-image: linear-gradient(to top, #8ae323, #014f7b);

  background-image: ${({direction, leftColor, rightColor, go}) =>
    go
      ? `linear-gradient(to top, #8ae323, #014f7b)`
      : `linear-gradient(to ${direction}, ${leftColor}, ${rightColor})`};

  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: white;
`

export const Para = styled.p`
  color: white;
`
export const Col = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Button = styled.button`
  background-color: #00c9b7;
  color: white;
  margin: 20px;
`
export const Div = styled.div`
  margin: 20px;
`
