import React, { Component } from 'react';
import { MainContainer, Container1, Container2, FooterLogo } from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import logo from '../AdminButton/img/FPC-Logo.png'
// 

class Footer extends Component{
    render(){
        return(
            
            <MainContainer>
                
                <Container2>
                <FooterLogo src={logo}/> 
                    <div>
                         
                        {/* <h3>STAY CONNECTED</h3> */}
                        <a href="https://www.facebook.com/LosAngelesFoodPolicyCouncil"><FacebookIcon href="https://www.facebook.com/LosAngelesFoodPolicyCouncil" style={{margin:'10px', color: 'white'}}/></a> 
                        <a href="https://www.instagram.com/lagoodfood/"><InstagramIcon style={{margin:'10px', color: 'white'}}/></a>
                        <a href="https://twitter.com/GoodFoodLA"><TwitterIcon style={{margin:'10px', color: 'white'}}/></a>
                    </div>  
                </Container2>
                <Container1>
                    <p>Copyright © 2020 Los Angeles Food Policy Council. All Rights Reserved</p>
                </Container1>
            </MainContainer>
        )
    }
}

export default Footer