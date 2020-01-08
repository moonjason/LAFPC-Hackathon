import styled from 'styled-components'

const S = {};

S.Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Container2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 8rem;
`

S.DropDown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`
S.Graph = styled.div`
  margin: 10px 0;
`

S.DescribSec = styled.div`
 text-align: center;
 margin: 0 10% 0 10%;
`
S.DescribPar = styled.p`
 text-align: left;
 margin: 2% 0 2% 0;
`

export default S