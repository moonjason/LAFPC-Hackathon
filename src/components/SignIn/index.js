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

  validate = () => {
    if(
      (this.state.password.length < 1) || 
      (this.state.username.length < 1)
      ) {
      this.setState({
        error: {
          password: 'passwords must match,length of 5 with a upper/lower case letter!!!' 
        }
      })
        return false
      } else {
        return true
    }
  };

  submit = async (e) => {
    console.log('hitting')
    e.preventDefault();
    const isValid = this.validate();
    if(isValid) {
        const login = this.props.login(this.state)
        login.then(() => {this.props.history.push('/admin-home')})
        console.log(this.props)
    }
  }

  render() {
      return (
          <div>
              <h1 style={{textAlign:'center'}}>SignIn</h1>
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
                    placeholder="password" 
                    name="password" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small></small>
                  </div>
                </div>
                <Button
                  type="submit" 
                  color="inherit"
                  variant="outlined" 
                  style={{margin:'5px'}} >
                    SignIn
                  </Button>
                <Button 
                  component={ LinkRoute } 
                  to='/AddAdmin' 
                  color="inherit"
                  variant="outlined"
                  style={{margin:'10px'}} >
                    SignUp
                </Button>
              </form>
          </div>
      )
  }
}

export default withRouter(SignIn)