import Link from 'next/link'
import styled from 'styled-components'
import { fustyle } from 'next-fucss/utils'
import Icon from '../elems/icon'

export default props => {

  return props.to
    ? <Link passHref href={props.to || props.href || '#'}>
        <StyledButton>
          {props.children || props.text || 'link'}
          <Icon icon={props.icon} family={props.family} />
        </StyledButton>
      </Link>
    : <StyledButton onClick={props.onClick || props.action || console.log}>
        {props.children || props.text}
        <Icon icon={props.icon} family={props.family} />
      </StyledButton>
}

const StyledButton = styled.button`
  ${fustyle({
    'p,m:0 fw:600 hv-trx:2px ts:all bs:5 dp:flx ai:c': true,
    'bg:lg-162dg-prim-sec p:10px-30px-10px-40px c:white br:80px': true
  })}
  ${props =>
    fustyle({
      'dp:flx ai:c': props.inline
    })}
`
