import styled from 'styled-components'

const S = {};

S.Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

S.Container2 = styled.div`
  display: grid;
  grid-template-columns: 20rem 50rem;
  grid-column-gap: 8rem;
  margin-bottom: 75px;
`

S.Graph = styled.div`
  margin: 10px 0;
`

S.DescribSec = styled.div`
 text-align: center;
 margin: 0 10% 0 10%;
`
S.DescribPar = styled.p`
 width: 90%;
 margin: 0 auto;
 margin-bottom: 5rem;
 text-align: left;
`

export default S