import Src from 'src'

export default ({ children, empty = false, loading }) => (
  <Src.Elems.Wrap fucss="mnh:100vh w:100pc dp:flx jc,ai:c mxw:1100px p-rl:3pc ps:rl">
    {children}
  </Src.Elems.Wrap>
)
