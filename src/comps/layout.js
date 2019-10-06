import Src from 'src'

export default ({ children, empty = false, loading }) => (
  <Src.Elems.Wrap fucss="h:100vh w:100pc dp:flx jc,ai:c">
    {children}
  </Src.Elems.Wrap>
)
