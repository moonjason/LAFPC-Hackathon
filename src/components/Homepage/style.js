import styled from 'styled-components'


export const HomeDiv = styled.div`
    text-align: center;
`
export const Tiles = styled.img`
    height: 50vh;
`

export const TileDiv = styled.div`
    margin-top: 3%;
    display: flex;
    justify-content: center;
    padding: 3%;
    margin: 0 10% 0 10%;
`

export const HeaderDiv = styled.div`
    margin: 0 30% 0 30%;
`
export const Title = styled.h1`
    margin-top: 3rem;
`

export const DescripDiv = styled.div`
    display: grid;
    grid-template-columns: 25% 25% 25%;
    grid-column-gap: 25px;
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
export const Break = styled.hr`
    width: 80%;
    border: 1.25px solid lightgray;
`
