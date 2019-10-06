import Src from 'src'
import { fustyle } from 'next-fucss/utils'
import styled, { css } from 'styled-components'
import Markdown from 'markdown-to-jsx';

const meta = {
  name: 'Unisi Tech',
  title: 'How much to build an MVP (minimum viable product)?',
  desc: `Do you have an amazing idea for an app or software but don’t know where to start?
    Would you like to find out how much it would cost to build a prototype?
    <br/>
    <br/>
    We have created this handy cost calculator just for you. Find out how much
    your prototype will cost in 2 mins.`
}

export default () => (
  <Src.Comps.Layout>
    <Src.Elems.Wrap fucss="md-dp:flx mdx-m-t:40px">

      <Src.Elems.Wrap fucss="ta:l mxw:330px">
        <Elems.Logo to="/">{meta.name}</Elems.Logo>
        <Elems.Title>{meta.title}</Elems.Title>
        <Elems.Desc>{meta.desc}</Elems.Desc>
        <Src.Elems.Wrap fucss="m-t:20px">
          <Src.Elems.Button to="next" icon="FaLongArrowAltRight">
            Let's get started
          </Src.Elems.Button>
        </Src.Elems.Wrap>
      </Src.Elems.Wrap>

      <img
        className="mxw:600px md-m-l:40px w:100pc mdx-m-t:40px" 
        src="https://firebasestorage.googleapis.com/v0/b/theunisi.appspot.com/o/unisi%2Fvideo.svg?alt=media&token=18b4fc94-9d8b-4c87-a92f-ff84db6229af" />
      <Src.Elems.Video
        muted autoPlay
        fucss="md-ps:ab mdx-try:110npc t,r:0 mxw:680px m-t:35px m-r:80px"
        src="https://firebasestorage.googleapis.com/v0/b/theunisi.appspot.com/o/unisi%2Fvideo.mp4?alt=media&token=c486d2b1-629c-4eb0-8de7-3bebccdc4faa" />

    </Src.Elems.Wrap>
  </Src.Comps.Layout>
)


const Logo = styled(Src.Elems.Link)`
  ${fustyle('fs:120pc c:prim fw:800 tt:uc')}
`

const Title = styled.h1`
  ${fustyle('fs:200pc fw:800 m-tb:20px lh:1.1')}
`

const Desc = ({ children }) => {
  return (
    <Src.Elems.Wrap fucss="fw:500 lh:1.6em c:txt">
      <Markdown
        options={{ forceBlock: true }}
        style={{ overflowWrap: 'anywhere' }}>
          {children}
        </Markdown>
    </Src.Elems.Wrap>
  )
}

const Elems = { Logo, Title, Desc }
