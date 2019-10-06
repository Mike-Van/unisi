import { fustyle } from 'next-fucss/utils'
import styled, { css } from 'styled-components'

export default styled.div`
  ${props => fustyle(props && props.fucss || 'dp:bk')}
  ${props =>
    fustyle({
      'op:1': !props.opaque,
      'op:.35': props.opaque,
      'op:1': !props.visible,
      'op:0': props.visible,
    })}
  ${props => props.shdwBot && css`
    box-shadow: inset 0 -5px 10px -10px rgba(0,0,0,.5);
  `}
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE 10+ */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* Chrome/Safari/Webkit */
  }
  background: ${props => props.bg};
  color: ${props => props.color};
`

const FixedWrapTop = styled.div`
  ${fustyle('md-ps:fx md-t:50px md-l:20px md-r:20px md-z:4 md-p-t:20px bg:333 br:0-0-5px-5px mxw:1240px')}
  @media only screen and (min-width: 1280px) {
    width: calc(100% - 290px);
    left: 50%;
    transform: translateX(calc(-50% + 125px));
  }
`

const FixedWrapRight = styled.div`
  ${fustyle(
    'w:275px xl-w:300px lg-r:0 od:2 bd-l:1px-sd-444 ps:fx bg:2a2a2a lg-bg:333 z:4 t:50px b:0 lg-t,b:auto mdx-ts:all'
  )}
  ${props =>
    fustyle({
      'r:0': !props.toggled,
      'r:275npx': props.toggled,
      'od:1 md-bd-r:1px-sd-444 md-bd-l:0 md-w:35pc md-l:0 md-r:auto md-t,b:auto md-ps:rl md-bg:333': props.leftAlignMD,
      'od:1 md-bd-r:0 md-bd-l:0 md-w:100pc md-l:0 md-r:auto md-t,b:auto md-ps:rl md-m-b:20px md-p-rl:0 md-bg:333': props.rowAlignMD
    })}
`

const OptionsWrap = styled.div`
  ${fustyle('dp:none p-l:42px')}
  ${props =>
    fustyle({
      'dp:flx': props.toggled
    })}
`
