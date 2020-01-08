import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Homepage from '../Homepage';
import AddAdmin from '../addAdmin';
import Affordable from '../Affordable';
import Healthy from '../Healthy';
import Fair from '../Fair';
import Sustainable from '../Sustainable';
import Navbar from '../Navbar';
import AdminHome from '../AdminHome';
import SignIn from '../SignIn'
import AdminButton from '../AdminButton';
import Container from '@material-ui/core/Container';
import Footer from '../Footer'
import TestComponent from '../TestComponent';
import TestComponent2 from '../TestComponent';


const My404 = () => {
  return (
    <div>
      <Redirect to='/home' />
    </div>
  )
}


class App extends Component {

  state = {
    user: null,
    loading: true,
    isLogged: false,
    data: [],
    affordable: [],
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('admin'))
    if(user) {
      this.setState({
        isLogged: true
      })
    }
  }

  register = async (data) => {
    console.log("hitting")
    try {
      const registerResponse = await fetch(`http://localhost:3030/admin/register-admin`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await registerResponse.json()
      console.log(parsedResponse, 'this is register response')
      localStorage.setItem('admin', parsedResponse.data.username)
      localStorage.setItem('loggedIn', true)
      console.log(localStorage, 'this is local storage')
      this.setState({
        user: parsedResponse.data,
        loading: false,
        isLogged: true
      })

    } catch(err) {
      console.log(err, 'this is error from register')
    }
  }

  login = async (loginInfo) =>{
    console.log('login app')
    try {
      const loginResponse = await fetch (`http://localhost:3030/admin/login-admin`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(loginInfo),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const parsedResponse = await loginResponse.json();
      console.log(parsedResponse, 'this is register response')
      localStorage.setItem('admin', JSON.stringify(parsedResponse.foundAdmin.username));
      localStorage.setItem('loggedIn', true);
      console.log(localStorage, 'this is local storage')
      this.setState(() => {
        return {
          isLogged: true,
          user: parsedResponse.foundUser,
          loading: false,
        }
      })

      return parsedResponse


    } catch (err){
      console.log(err)
    }
  }

  logout = async () => {
    try {
      fetch(`http://localhost:3030/admin/logout-admin`)
      .then(res => {
        this.setState({
          isLogged: false
        })
      })
      localStorage.removeItem('admin');
      localStorage.removeItem('loggedIn');
      this.props.history.push(`/`)
    } catch(err){
      console.log(err)
    }
  }
s


    render() {
      const { login } = this.login
      console.log(this.props)
        return (
          <div>
            <AdminButton isLogged={this.state.isLogged} logout={this.logout}/>
            <Navbar logout={this.logout}/>
            <Switch>
              {
                this.state.isLogged
                ?
                <Route exact path='/' render={(props) => <AdminHome {...props}/>}/>
                : 
                <Route exact path='/' render={(props) =>  <Homepage {...props} />}  />
              }
              <Route exact path='/addadmin' render={(props) =>  <AddAdmin register={this.register}  {...props} />} />
              <Route exact path='/' render={(props) =>  <Homepage {...props} />}  />
              <Route exact path='/affordable' render={() => <Affordable  isLogged={this.state.isLogged}/>}/>
              <Route exact path='/healthy' render={() => <Healthy isLogged={this.state.isLogged}/>}/>
              <Route exact path='/fair' render={() => <Fair isLogged={this.state.isLogged}/>}/>
              <Route exact path='/sustainable' render={() => <Sustainable isLogged={this.state.isLogged}/>}/>

              <Route exact path='/test' render={() => <TestComponent isLogged={this.state.isLogged} />} />
              <Route exact path='/test' render={() => <TestComponent2 isLogged={this.state.isLogged} />} />
              <Route exact path='/admin' render={() => <SignIn login={this.login} msg={this.state.msg}/>} />
              <Route component={ My404 } />
            </Switch>
            <Footer/>
          </div>
        )
    }
}

export default withRouter(App)