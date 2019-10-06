
import styled from 'styled-components'
import { fustyle } from 'next-fucss/utils'
import Wrap from './wrap'

export default props => {
  return (
    <Wrap style={{ mixBlendMode: 'darken' }} fucss={`w:100pc ${props.fucss || ''}`}>
      <video style={{ width: '100%' }} autoPlay={props.autoPlay} muted={props.muted}>
        <source src={props.src || props.url || ''} type={props.type || 'video/mp4'} />
      </video>
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
