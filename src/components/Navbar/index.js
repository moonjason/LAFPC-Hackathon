import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRoute, NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        const pageUrl = window.location.href.split('/')[window.location.href.split('/').length - 1]; 
        return (
          <div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ButtonGroup fullWidth aria-label="full width outlined button group">
                        <Button
                            size="large"
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/sustainability'
                            style={
                                pageUrl === 'sustainability' 
                                ? {backgroundColor:'#8BC147', color:'white', fontWeight:'bold', borderColor:'#8BC147', borderBottom: '4px solid black'}
                                : {backgroundColor:'#8BC147', color:'white', fontWeight:'bold', borderColor:'#8BC147'}
                            }
                        >
                            Sustainability
                        </Button>
                        <Button 
                            size="large"
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/health' 
                            style={
                                pageUrl === 'health' 
                                ? {backgroundColor:'#AAE0F4', color:'white', fontWeight:'bold', borderColor:'#AAE0F4', borderBottom: '4px solid black'}
                                : {backgroundColor:'#AAE0F4', color:'white', fontWeight:'bold', borderColor:'#AAE0F4'}
                            }
                        >
                            Health
                        </Button>
                
                        <Button
                            size="large"
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/affordability' 
                            style={
                                pageUrl === 'affordability' 
                                ? {backgroundColor:'#F4934D', color:'white', fontWeight:'bold', borderColor:'#F4934D', borderBottom: '4px solid black'}
                                : {backgroundColor:'#F4934D', color:'white', fontWeight:'bold', borderColor:'#F4934D'}
                            }
                        >
                            Affordability
                        </Button>
                        <Button
                            size="large"
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/fairness' 
                            style={
                                pageUrl === 'fairness' 
                                ? {backgroundColor:'#D6D7AD', color:'white', fontWeight:'bold', borderColor:'#D6D7AD', borderBottom: '4px solid black'}
                                : {backgroundColor:'#D6D7AD', color:'white', fontWeight:'bold', borderColor:'#D6D7AD'}
                            }
                        >
                            Fairness
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
          </div>
        )
    }
}


export default Navbar