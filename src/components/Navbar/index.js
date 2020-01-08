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
                            to='/sustainable'
                            style={
                                pageUrl === 'sustainable' 
                                ? {backgroundColor:'#8BC147', color:'white', fontWeight:'bold', borderColor:'#8BC147', borderBottom: '4px solid black'}
                                : {backgroundColor:'#8BC147', color:'white', fontWeight:'bold', borderColor:'#8BC147'}
                            }
                            onClick={() => this.setState({active: 'sustainable'})}
                        >
                            Sustainability
                        </Button>
                        <Button 
                            size="large"
                            className='nav-button'
                            component={ LinkRoute } 
                            to='/healthy' 
                            style={
                                pageUrl === 'healthy' 
                                ? {backgroundColor:'#AAE0F4', color:'white', fontWeight:'bold', borderColor:'#AAE0F4', borderBottom: '4px solid black'}
                                : {backgroundColor:'#AAE0F4', color:'white', fontWeight:'bold', borderColor:'#AAE0F4'}
                            }
                            onClick={() => this.setState({active: 'healthy'})}
                        >
                            Health
                        </Button>
                
                        <Button
                            size="large"
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/affordable' 
                            style={
                                pageUrl === 'affordable' 
                                ? {backgroundColor:'#F4934D', color:'white', fontWeight:'bold', borderColor:'#F4934D', borderBottom: '4px solid black'}
                                : {backgroundColor:'#F4934D', color:'white', fontWeight:'bold', borderColor:'#F4934D'}
                            }
                            onClick={() => this.setState({active: 'affordable'})}
                        >
                            Affordability
                        </Button>
                        <Button
                            size="large"
                            className='nav-button' 
                            component={ LinkRoute } 
                            to='/fair' 
                            style={
                                pageUrl === 'fair' 
                                ? {backgroundColor:'#D6D7AD', color:'white', fontWeight:'bold', borderColor:'#D6D7AD', borderBottom: '4px solid black'}
                                : {backgroundColor:'#D6D7AD', color:'white', fontWeight:'bold', borderColor:'#D6D7AD'}
                            }
                            onClick={() => this.setState({active: 'fair'})}
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