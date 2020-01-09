import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'

import {HomeDiv, 
        TileDiv,
        Card,
        Icon,
        Title,
        HeaderDiv,
        DescripDiv,
        Descrip,
        UserImg,
        UserImgDiv,
        Break,
        Text,
        PillarDiv,
        PillarTitle,
        PillarDescrip,
        CaseStudiesDiv,
        CaseStudiesHead
        } from './style'


import Affordablility from "./img/Affordability.png"
import Sustainability from "./img/Sustainability.png"
import Fairness from "./img/Fairness2.png"
import Health from "./img/Health.png"

import Food from "./img/securityimg.jpg"
import Compost from "./img/compost-ground.jpg"
import Plant from "./img/green-plant.jpg"

class Home extends Component {
    render() {

        const foodStyle = {
            backgroundImage: `url("${Food}")`,
            border: '0px solid black'
        }

        const compostStyle = {
            backgroundImage: `url("${Compost}")`,
            border: '0px solid black'
        }

        const plantStyle = {
            backgroundImage: `url("${Plant}")`,
            border: '0px solid black'
        }

        return (
                <HomeDiv>
                    <HeaderDiv>
                        <h1>Food System Dashboard</h1>
                        <p>LAFPC takes great pride at the positive changes we affect in our communities. See below for our in-depth statistics and data on how much our programs improve the loves of those around us.</p>
                    </HeaderDiv>
                    <TileDiv>
                        <Card to="/sustainability" color="#78B350">
                            <Icon src={Sustainability}></Icon>
                            <PillarDiv>
                                <PillarTitle>Sustainability</PillarTitle>
                                <PillarDescrip>See how we ensure and expand the impact for sustainable food practices.</PillarDescrip>
                            </PillarDiv>
                        </Card>
                        <Card to="/health" color="#266574">
                            <Icon src={Health}></Icon>
                            <PillarDiv>
                                <PillarTitle>Health</PillarTitle>
                                <PillarDescrip>See how our efforts are improving people’s health in the community.</PillarDescrip>
                            </PillarDiv>
                        </Card>
                        <Card to="/affordability" color="#B94851">
                            <Icon src={Affordablility}></Icon>
                            <PillarDiv>
                                <PillarTitle>Affordability</PillarTitle>
                                <PillarDescrip>See our success in providing affordable, fresh food to locals.</PillarDescrip>
                            </PillarDiv>
                        </Card>
                        <Card to="/fairness" color="#FF8263">
                            <Icon src={Fairness}></Icon>
                            <PillarDiv>
                                <PillarTitle>Fairness</PillarTitle>
                                <PillarDescrip>See how we curate fair prices for the food we help to distribute.</PillarDescrip>
                            </PillarDiv>
                        </Card>
                    </TileDiv>
                    <Break></Break>
                    <DescripDiv>
                        <Descrip>
                            <h1>What</h1>
                            <Text>The Los Angeles Food System Dashboard is a tool for the Good Food Movement to better understand the local and regional food supply chain, from farm to compost bin, and its impacts on the health and quality of life of all Angelenos.</Text>
                        </Descrip>
                        <Descrip>
                            <h1>Why</h1>
                            <Text>The Dashboard strives to assist all Los Angeles food system stakeholders—residents, community organizers, government officials and staff, practitioners, nonprofits, and businesses—with metrics to
                            evaluate the efficacy of current initiatives and to advance transformative policy and systems changes. Indicators included in this Dashboard are organized by our Good Food values.</Text>
                        </Descrip>
                        <Descrip>
                            <h1>How</h1>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </Text>
                        </Descrip>
                    </DescripDiv>
                    <Break></Break>
                        <Title>Case Studies</Title>
                    <UserImgDiv>
                        {/* <UserImg src={Food}/>
                        <UserImg src={Compost}/> */}
                        {/* <UserImg src={Plant}/> */}
                        <CaseStudiesDiv style={foodStyle}>
                        <CaseStudiesHead>Food Security</CaseStudiesHead>
                            <p>Food security between different age and race remains a challenge.</p>
                        </CaseStudiesDiv>
                        <CaseStudiesDiv style={compostStyle}>
                            <CaseStudiesHead>LA Compost</CaseStudiesHead>
                            <p>LA Compost approaches sustianability in a holistic way</p>
                        </CaseStudiesDiv>
                        <CaseStudiesDiv style={plantStyle}>
                            <CaseStudiesHead>Veggies Rx Program</CaseStudiesHead>
                            <p>Improving healthy food consumption through holistic healthcare approaches</p>
                        </CaseStudiesDiv>
                    </UserImgDiv>
                </HomeDiv>
        )
    }
}

export default Home