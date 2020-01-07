import React, { Component } from 'react';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import { Link as LinkRoute } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Navbar extends Component {
    render() {
        return (
          <div>
            <Grid container spacing={3}>
                <Grid item xs={12} style={{marginLeft: '30px', marginRight: '30px'}}>
                    <ButtonGroup fullWidth aria-label="full width outlined button group">
                        <Button
                            size='large'
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/sustainable'
                            style={{backgroundColor:'#8BC147', color:'white', fontWeight:'bold', borderColor:'#8BC147'}}
                        >
                            Sustainability
                        </Button>
                        <Button 
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/healthy' 
                            style={{backgroundColor:'#AAE0F4', color:'white', fontWeight:'bold', borderColor:'#AAE0F4'}}
                        >
                            Health
                        </Button>
                
                        <Button
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/affordable' 
                            style={{backgroundColor:'#F4934D', color:'white', fontWeight:'bold', borderColor:'#F4934D'}}
                        >
                            Affordability
                        </Button>
                        <Button
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/fair' 
                            style={{backgroundColor:'#D6D7AD', color:'white', fontWeight:'bold', borderColor:'#D6D7AD'}}
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