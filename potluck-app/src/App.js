import React, {useState, useEffect} from 'react'
import { Route, Switch, Router } from 'react-router-dom'
import { useHistory } from 'react-router'
import PrivateRoute from './components/PrivateRoute'
import { connect } from 'react-redux';
////// Components /////
import Home from './components/Home'
import MyPotlucks from './components/MyPotlucks'
import CreatePotluck from './components/CreatePotluck'
import Login from './components/Login'
import Signup from './components/Signup'
import { Button } from '@material-ui/core'
import axiosWithAuth from './components/helpers/axiosWithAuth';
import './App.css'

///// Initial States /////
const initialFormValues = {
  ///// TEXT INPUTS /////
  date: '',
  time: '',
  location: '',
  items: ''

  
}
const initalUserValues = {
  id:0,
  username:'', 

}

const initialDisabled = true;
const initialPotluck = [];

////////////////////////////////////



const App = (props) => {

  ///// States /////
  const [potluck, setPotluck] = useState(initialPotluck);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [userValues, setUserValues] = useState(initalUserValues)
  const Logout=()=>{
    localStorage.removeItem('token')
    routeToLogin()
    window.location.reload(true);
  }

  ///// Event Handlers /////
  // The input change function will check to see if an input is updated on the form and then
  // update the form value variable we will use to create a potluck object
  const inputChange = (name, value) => {
    // we need a validate function here in the future
    // validate()
    setFormValues({
      ...formValues,
      [name]: value
    })
  }
  console.log(props)
  const formSubmit = () => {
    const newPotluck = {
      organizer_id:userValues.id,
      potluck_id:Date.now(),
      potluck_name:userValues.username,
      potluck_date: formValues.date,
      potluck_time: formValues.time,
      potluck_location: formValues.location,
      potluck_item: formValues.item
    }

    //postNewOrder(newPotluck); We will eventually update a server with a new potluck
    console.log(newPotluck);

    axiosWithAuth().post(`https://potluck-planner-7.herokuapp.com/api/potlucks`, newPotluck)
      .then(res =>{
        console.log(res)
      }).catch(err=> console.error(err))
  }

  const history = useHistory();

  const routeToHome = () => {
    history.push(`/home`);
    window.location.reload(true);
  }
  const routeToLogin = () =>{
    history.push('/Login')
    window.location.reload(true);
  }
  const routeToSignup = () =>{
    history.push('/signup')
  }


  return (
    <>
      <div className="header">
        <h1>Potluck App!</h1>
        <nav>{
        (localStorage.getItem('token')) ? ( <><button className="btnStyle"  onClick={routeToHome}>Home</button> <button className="btnStyle"  onClick={Logout}>Logout</button> </>):(<><button className="btnStyle"  onClick={routeToLogin}> Login </button><button className="btnStyle"  onClick={routeToSignup}>Sign-up </button></>)
        }</nav>
      </div>

      <Router history ={history}>
        <Switch>
        <Route path ='/login'>
          <Login
            values ={userValues}
          />
        </Route>
        <PrivateRoute exact path='/home' component ={Home} isAuthenticated={props.isAuthenticated}>
          <Home/>
        </PrivateRoute>
        <PrivateRoute path='/mypotlucks' component = {MyPotlucks} isAuthenticated={props.isAuthenticated}>
          <MyPotlucks/>
        </PrivateRoute>

        <Route path = '/signup'>
          <Signup/>
        </Route>
        <PrivateRoute path='/createpotluck' component ={CreatePotluck} isAuthenticated={props.isAuthenticated}>
          <CreatePotluck
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
        </PrivateRoute>
        </Switch>
      </Router>
      
    </>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(App);
