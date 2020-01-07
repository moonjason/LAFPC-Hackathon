import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DivDataModal = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 60%;
  background: #8bc147;
  display: flex;
  justify-content: center;
`

export const ContainModal = styled.div`
  width: 50%;
  background: white;
  text-align: center;
`


export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin-top: 30px;
`
export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 9px;
`
export const TableData = styled.div`
  margin: 1px;
  width: 11%;
  height: 50px;
  text-align: center;
  overflow: hidden;
  &:hover {
    background: #8bc147;
    opacity: .8;
  }
`

export const TableDataHeader = styled.div`
  margin: 1px;
  width: 11%;
  height: 30px;
  text-align: center;
`

export const TableDataButton = styled.div`
  margin: 1px;
  width: 11%;
  height: 50px;
  text-align: center;
`

export const Button = styled.button`
  width: 100%;
  padding: 3px;
  border-radius: 2px;
`
export const H1 = styled.h1`
  font-size: 1em;
  font-weight: normal;
  background: #8bc147;
  margin: 0px;
  margin-bottom: 2px;
  color: white;
`
export const P = styled.p`
  font-size: .8em;
  margin: 0px;
`
export const DescribSec = styled.div`
 text-align: center;
 margin: 0 10% 0 10%;
`
export const DescribPar = styled.p`
 text-align: left;
 margin: 2% 0 2% 0;
 `
export const ChartDiv = styled.div`
display: flex;
width: 100%;
justify-content: space-evenly;
margin: 6%;
`

export const ToolKit = styled.div`
flex-direction: column;
margin: 3%;
`