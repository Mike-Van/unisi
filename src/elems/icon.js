
import styled from 'styled-components'
import { fustyle } from 'next-fucss/utils'
import Wrap from './wrap'

export default props => {
  // if(!props.icon)
  return null

  // const Icon = require(`react-icons/${props.family || 'fa'}/`)[props.icon];

  return (
    <Wrap fucss="m-l:5px lh:1 dp:ib m-t:2px">
      <Icon />
    </Wrap>
  )
}

// const StyledC = styled.a`
//   ${fustyle('hv-c:prim ts:all')}
//   ${props =>
//     fustyle({
//       'dp:flx ai:c': props.inline
//     })}
// `
