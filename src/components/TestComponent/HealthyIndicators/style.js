import styled from "styled-components"

const S = {};

S.FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

S.IndicatorDiv = styled.div`
  width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  border: 0.1px solid black;
`

S.Accordian = styled.button`
  width: 250px;
  &.active {
    & + .content {
      max-height: 500px;
    }
  }
`
S.AccordianTitle = styled.p`
  text-align: left;
`

S.AccordionContent = styled.div`
  max-height: 0;
  width: 250px;
  background-color: grey;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  transition: max-height 0.25s ease-in-out;
`

export default S