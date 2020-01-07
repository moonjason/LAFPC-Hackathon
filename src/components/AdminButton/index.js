import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Link as LinkRoute } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import logo from "./img/FPC-Logo.png"
import Banner from "./img/apples-banner.png"
import HomeIcon from '@material-ui/icons/Home';


class AdminButton extends Component {

  render() {
      return (
        <div style={{backgroundImage:`url(${Banner})`, backgroundPosition:'center', backgroundSize:'cover'}}>
          <div style={{marginLeft: '30px', marginRight: '30px'}}>
            <Grid container spacing={3} style={{alignItems:'center'}}>
              <Grid item xs>
                <div style={{display:'flex'}}>
                  <a href='https://www.goodfoodla.org/'><img src={logo} width={100} height={100} alt={"logo"} /></a> 
                </div>
              </Grid>
              <Grid item xs>
                <div>
                  <div style={{textAlign:'center', alignItems: 'center'}}>
                    <Button size='large' component={ LinkRoute } to='/home' style={{color:'white', fontWeight: 'bold'}}>
                      LAFPC Food System Dashboard
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs style={{textAlign:"right"}}>
                <Button
                  component={ LinkRoute } 
                  to='/'
                  color="inherit"
                  style={{margin:'0', color:'white', fontWeight:'bold'}}
                >
                  <HomeIcon />
                </Button>
                <Button 
                component={ LinkRoute } 
                to='/SignIn' 
                color="inherit"
                style={{margin:'20px', color:'white', fontWeight:'bold'}}
                >
                  Admin
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      )
  }
}

export default AdminButton;