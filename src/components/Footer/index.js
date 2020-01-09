import React, { Component } from 'react';
import { MainContainer, Container1, Container2, FooterLogo } from './style'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';
import logo from '../AdminButton/img/FPC-Logo.png'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


// 
import Grid from '@material-ui/core/Grid';

const topContainer = {
    'background-color': '#2e6472',
    'color': '#fff',
    'display': 'flex',
    'justify-content': 'center',
    'padding-top': '10px'
}

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Footer = () => {
        const classes = useStyles();
        return(
            
            <MainContainer>
                {/* <FooterLogo src={logo}/>  */}
                <div className={classes.root} style={topContainer}>
                    <Grid container spacing={3}>
                        <Grid item xs style={{textAlign: 'center', marginTop: '25px'}}>
                            <a href='https://www.goodfoodla.org/'><img src={logo} width={100} height={100} alt={"logo"} /></a> 
                        </Grid>
                        <Grid item xs={6} style={{textAlign: 'center', paddingTop: '50px'}}>
                            <a href="https://www.facebook.com/LosAngelesFoodPolicyCouncil"><FacebookIcon href="https://www.facebook.com/LosAngelesFoodPolicyCouncil" style={{margin:'10px', color: 'white'}}/></a> 
                            <a href="https://www.instagram.com/lagoodfood/"><InstagramIcon style={{margin:'10px', color: 'white'}}/></a>
                            <a href="https://twitter.com/GoodFoodLA"><TwitterIcon style={{margin:'10px', color: 'white'}}/></a>
                        </Grid>
                        <Grid item xs>
                        </Grid>
                    </Grid>
                </div>                      
                <Container1>
                    <p>Copyright © 2020 Los Angeles Food Policy Council. All Rights Reserved</p>
                </Container1>
            </MainContainer>
        )

}

export default Footer