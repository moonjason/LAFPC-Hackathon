import styled from "styled-components"

const S = {};

S.FilterContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
`

S.IndicatorDiv = styled.div`
  width: 250px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  border: 0.1px solid black;
  margin-bottom: 25px;
  background-color: #E2E9EB;
  font-size: 15px;
`
S.IndicatorContainer = styled.div`
  width: 243px;
  background-color: #C9D6D9;
  border: 1px solid grey;
  padding-left: 5px;
`

S.IndicatorTitle = styled.p`
  text-align: left;
  padding: 0 5px;
  font-size: 15px;
`

S.Accordian = styled.button`
  width: 250px;
  background-color: #C9D6D9;
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &.active {
    & + .content {
      max-height: 500px;
      border: 1px solid grey;
    }
    & :nth-child(2) {
      transform: rotate(270deg);
    }
  }
`
S.AccordianTitle = styled.p`
  text-align: left;
  padding: 0 5px;
  font-size: 15px;
`

S.AccordionContent = styled.div`
  max-height: 0;
  width: 248px;
  background-color: grey;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  background-color: #E2E9EB;
  transition: max-height 0.25s ease-in-out;
  font-size: 15px;
`

S.Label = styled.label`
  border-bottom: 1px dashed grey;
  border-bottom: ${props => props.border ? props.border : "1px dashed grey"};
  padding: 5px 0px 5px 10px;
`

S.LabelTitle = styled.span`
  padding-left: 5px;
`

S.downArrow = styled.img`
  width: 10px;
  padding: 10px;
  transform: rotate(180deg);
  transition: all 0.1s ease-in;
`

export default S