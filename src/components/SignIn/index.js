import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Link as LinkRoute } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class SignIn extends Component {

  state = {
    name: '',
    password: '',
  }

  onInputChange = (e) => { this.setState({ [e.target.name]: e.target.value }) 
  };

  validate = async () => {
    const loginResponse = await fetch (`http://localhost:3030/admin/login-admin`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse.msg, 'hello')
    if(parsedResponse.msg) {
        console.log('false')
        this.setState({
          error: parsedResponse.msg
        })
        return false
    } else if (!parsedResponse.msg) {
        console.log('true')
        return true
    }
  };

  submit = async (e) => {
    console.log('hitting')
    e.preventDefault();
    const isValid = await this.validate();
    if(isValid === true) {
        const login = this.props.login(this.state)
        login.then(() => {this.props.history.push('/')})
    }
  }

  render() {
      return (
          <div>
              <h1 style={{textAlign:'center'}}>Sign In</h1>
              <form onSubmit={this.submit} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <div>
                  <TextField
                    label='Username' 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small></small>
                  </div>
                </div>
                <div>
                  <TextField 
                    type="Password" 
                    placeholder="Password" 
                    name="password" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small></small>
                  </div>
                </div>
                <div>{this.state.error}</div>
                <Button
                  type="submit" 
                  color="inherit"
                  variant="outlined" 
                  style={{margin:'5px'}} >
                    Log In
                  </Button>
                <Button 
                  component={ LinkRoute } 
                  to='/AddAdmin' 
                  color="inherit"
                  variant="outlined"
                  style={{margin:'10px'}} >
                    Sign Up
                </Button>
              </form>
          </div>
      )
  }
}

export default withRouter(SignIn)