import Link from 'next/link'
import styled from 'styled-components'
import { fustyle } from 'next-fucss/utils'

export default props => {
  return props.action || props.onClick ? (
    props.children
  ) : (
    <Link passHref href={props.to || props.href || '#'}>
      <StyledLink className={props.className}>{props.children || props.text || 'link'}</StyledLink>
    </Link>
  )
}

const StyledLink = styled.a`
  ${fustyle('hv-c:prim ts:all')}
  ${props =>
    fustyle({
      'dp:flx ai:c': props.inline
    })}
`
