import styled from 'styled-components'

const S = {};

S.Container1 = styled.div`
  font-family: 'Roboto', sans-serif;
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
 margin: 3% 10% 0 10%;
`
S.DescribPar = styled.p`
 width: 90%;
 margin: 0 auto;
 margin-bottom: 5rem;
 text-align: left;
 line-height: 25px;
`

export default S