// Style your elements here
import styled from 'styled-components'

export const Unorderlist = styled.ul`
  list-style-type: none;
  display: flex;
`
export const List = styled.li`
  margin: 15px;
`
export const B = styled.button`
  opacity: ${props => (props.Active ? 1 : 0.5)};
`
