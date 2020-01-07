import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';



class AddAdmin extends Component {

  state = {
    username: '',
    password: '',
    repassword: '',
    keycode: '',
    error: {
      username: '',
      password: '',
      keycode: '',
    }
  }

  onInputChange = (e) => { this.setState({ [e.target.name]: e.target.value }) 
  };

  validate = () => {
    if (this.state.username.length < 1) {
      this.setState({
        error: {
          name: 'please fill out name!!!'
        }
      })
      return false
    }
    if(
        (this.state.password !== this.state.repassword) || 
        (this.state.password.length < 4) ||
        (this.state.password.search(/[a-z]/) === -1) ||
        (this.state.password.search(/[0-9]/) === -1) ||
        (this.state.password.search(/[A-Z]/) === -1 )
      ) {
      this.setState({
        error: {
          password: 'passwords must match, needs a number, length of 5 with a upper/lower case letter!!!' 
        }
      })
        return false
      }
      if (this.state.keycode !== 'foodpolicy') {
        this.setState({
          error: {
            keycode: 'enter in correct keycode'
          }
        })
        return false
      } else{
        return true

      }
  };

  submit = async (e) => {
    console.log('hitting')
    e.preventDefault();
    const isValid = this.validate();
    if(isValid) {
        console.log(this.props)
        const registerCall = this.props.register(this.state);
        registerCall.then((data) => {
          console.log(data, 'this is data from register')
          this.props.history.push('/admin-home')
        })
    }
  }

  render() {
    console.log(this.state)
      return (
          <div>
              <h1 style={{textAlign:'center'}}>Register as an Admin</h1>
              <form onSubmit={this.submit} style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                <div>
                  <TextField 
                    label='Username'
                    type="text" 
                    placeholder="Username" 
                    name="username" 
                    onChange={this.onInputChange} 
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small>{this.state.error.name}</small>
                  </div>
                </div>
                <div>
                  <TextField 
                    label='Password'
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                </div>
                <div>
                  <TextField
                    label='Retype Password'
                    type="password" 
                    placeholder="repassword" 
                    name="repassword" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small>{this.state.error.password}</small>
                  </div>
                  </div>
                  <div>
                  <TextField
                    label='Key Code'
                    type="keycode" 
                    placeholder="keycode" 
                    name="keycode" 
                    onChange={this.onInputChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <div>
                    <small>{this.state.error.keycode}</small>
                  </div>
                </div>
                <Button 
                  type="submit" 
                  variant="outlined" 
                  style={{margin: "10px"}}
                  >Sign Up
                </Button>
              </form>
          </div>
      )
  }
}

export default withRouter(AddAdmin)