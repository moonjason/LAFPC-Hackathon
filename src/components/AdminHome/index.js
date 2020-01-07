import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'

import {HomeDiv, 
        Tiles, 
        TileDiv,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Text} from './style'

import afford from "./img/Afford.png"
import fair from "./img/Fair.png"
import health from "./img/Health.png"
import sus from "./img/Sus.png"


class AdminHome extends Component{
  render() {
    return (
            <HomeDiv>
                <HeaderDiv>
                    <h1>Admin Home Page</h1>
                </HeaderDiv>
                <TileDiv>
                    <a href='/sustainable'><Tiles src={sus} alt={"logo"} /></a>
                    <a href='/healthy'><Tiles src={health} alt={"logo"} /></a>
                    <a href='/affordable'><Tiles src={afford} alt={"logo"} /></a>
                    <a href='/fair'><Tiles src={fair} alt={"logo"} /></a>
                </TileDiv>
            </HomeDiv>
    )
}
}

export default AdminHome;