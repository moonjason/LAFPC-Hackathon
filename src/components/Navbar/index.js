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
                                ? {backgroundColor:'#78B350', color:'#3A3B45', fontWeight:'bold', borderColor:'#78B350'}
                                : {backgroundColor:'#78B350', color:'white', fontWeight:'bold', borderColor:'#78B350'}
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
                                ? {backgroundColor:'#266574', color:'#3A3B45', fontWeight:'bold', borderColor:'#266574'}
                                : {backgroundColor:'#266574', color:'white', fontWeight:'bold', borderColor:'#266574'}
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
                                ? {backgroundColor:'#B94A51', color:'#3A3B45', fontWeight:'bold', borderColor:'#B94A51'}
                                : {backgroundColor:'#B94A51', color:'white', fontWeight:'bold', borderColor:'#B94A51'}
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
                                ? {backgroundColor:'#FF8263', color:'#3A3B45', fontWeight:'bold', borderColor:'#FF8263'}
                                : {backgroundColor:'#FF8263', color:'white', fontWeight:'bold', borderColor:'#FF8263'}
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