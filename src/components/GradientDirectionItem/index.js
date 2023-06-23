// Write your code here
import {Unorderlist, List, B} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionsList, side, isActive} = props

  const But = value => {
    side(value)
  }

  return (
    <div>
      <Unorderlist>
        {gradientDirectionsList.map(each => (
          <List key={each.directionId}>
            <B
              type="button"
              onClick={() => But(each.value)}
              Active={each.value === isActive}
            >
              {each.displayText}
            </B>
          </List>
        ))}
      </Unorderlist>
    </div>
  )
}

export default GradientDirectionItem
