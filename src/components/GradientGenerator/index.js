import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {Container, Heading, Para, Col, Button, Div} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    leftColor: '#8ae323',
    rightColor: '#014f7b',
    direction: 'top',
    go: true,
    isActive: 'top',
  }

  LC = event => {
    console.log(event.target.value)
    this.setState({leftColor: event.target.value, go: true})
  }

  RC = event => {
    this.setState({rightColor: event.target.value, go: true})
  }

  side = value => {
    console.log(value)
    this.setState({direction: value, isActive: value})
  }

  Generate = () => {
    this.setState({go: false})
  }

  render() {
    const {leftColor, rightColor, direction, go, isActive} = this.state
    return (
      <>
        <Container
          data-testid="gradientGenerator"
          direction={direction}
          leftColor={leftColor}
          rightColor={rightColor}
          go={go}
        >
          <Heading>Generate a CSS Color Gradient</Heading>
          <Para>Choose Direction</Para>
          <GradientDirectionItem
            gradientDirectionsList={gradientDirectionsList}
            side={this.side}
            isActive={isActive}
          />
          <Para>Pick the Colors</Para>
          <Col>
            <Div>
              <Para>{leftColor}</Para>
              <input type="color" value={leftColor} onChange={this.LC} />
            </Div>
            <Div>
              <Para>{rightColor}</Para>
              <input type="color" value={rightColor} onChange={this.RC} />
            </Div>
          </Col>
          <Button type="button" onClick={this.Generate}>
            Generate
          </Button>
        </Container>
      </>
    )
  }
}
export default GradientGenerator
