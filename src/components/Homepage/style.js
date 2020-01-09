import styled from 'styled-components'
import { NavLink } from "react-router-dom"


export const HomeDiv = styled.div`
    text-align: center;
`
export const TileDiv = styled.div`
    display: grid;
    grid-template-columns: 220px 220px 220px 220px;
    grid-column-gap: 20px;
    justify-content: center;
    margin: 75px 0;
`

export const Card = styled(NavLink)`
    font-family: 'Roboto', sans-serif;
    width: 220px;
    height: 350px;
    display: flex;
    flex-direction: column;
    background-color: black;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
    background-color: ${props => props.color};
    text-decoration: none;
    &:hover {
        opacity: 0.91;
    }
`

export const Icon = styled.img`
    height: 55%;
`
export const PillarDiv = styled.div`
    height: 40%;
    display: flex;
    flex-direction: column;
`

export const PillarTitle = styled.h2`
    color: white;
    margin: 0;
    font-weight: 500;
`

export const PillarDescrip = styled.p`
    color: white;
    padding: 5px;
    margin: 0;
    font-weight: 300;
`

export const HeaderDiv = styled.div`
    margin: 0 30% 0 30%;
`
export const Title = styled.h1`
    margin-top: 75px;
`

export const DescripDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-column-gap: 50px;
    justify-content: center;
    margin: 2rem 0;
`

export const Descrip = styled.div`
    text-align: center;
    padding: 3%;
`

export const Text = styled.p`
    text-align: left;
`

export const UserImgDiv = styled.div`
    margin-top: 3%;
    display: flex;
    justify-content: center;
    padding: 3%;
    margin: 0 10% 0 10%;
`

export const UserImg = styled.img`
    padding: 30px;
    height: 40vh;
    width: 40vh;
    border-radius: 10%;
    &:hover {
       opacity: .8;
    }
`

export const CaseStudiesDiv = styled.div`
    color: white;
    font-size: 22px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0 10px;
    padding: 30px;
    height: 40vh;
    width: 50vh;
    border-radius: 3%;
    &:hover {
       opacity: .8;
    }
    background-size: cover;
    background-repeat: no-repeat;
`

export const CaseStudiesHead = styled.h4`
    font-size: 32px;
    
`

export const Break = styled.hr`
    width: 80%;
    border: 1.25px solid lightgray;
    margin-bottom: 0;
`
