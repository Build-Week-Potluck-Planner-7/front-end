import React, {useState, useEffect} from 'react'
import { Route, Switch } from 'react-router-dom'
import { useHistory } from 'react-router'


////// Components /////
import Home from './components/Home'
import MyPotlucks from './components/MyPotlucks'
import CreatePotluck from './components/CreatePotluck'
import Login from './components/Login'
import Signup from './components/Signup'

///// Initial States /////
const initialFormValues = {
  ///// TEXT INPUTS /////
  date: '',
  time: '',
  location: '',

  
}

const initialDisabled = true;
const initialPotluck = [];

////////////////////////////////////



function App() {
  ///// States /////
  const [potluck, setPotluck] = useState(initialPotluck);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);

  ///// Event Handlers /////
  // The input change function will check to see if an input is updated on the form and then
  // update the form value variable we will use to create a potluck object
  const inputChange = (name, value) => {
    // we need a validate function here in the future
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newPotluck = {
      date: formValues.date,
      time: formValues.time,
      location: formValues.location
    }

    //postNewOrder(newPotluck); We will eventually update a server with a new potluck
    console.log(newPotluck);
  }

  const history = useHistory();

  const routeToHome = () => {
    history.push(`/`);
  }
  const routeToLogin = () =>{
    history.push('/Login')
  }
  const routeToSignup = () =>{
    history.push('/signup')
  }

  return (
    <>
      <div className="header">
        <h1>Potluck App!</h1>
        <button onClick={routeToHome}>Home</button>
        <button onClick ={routeToLogin}>Login</button>
        <button onClick = {routeToSignup}>Sign up</button>
      </div>

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/mypotlucks'>
          <MyPotlucks/>
        </Route>
        <Route path ='/login'>
          <Login/>
        </Route>
        <Route path = '/signup'>
          <Signup/>
        </Route>
        <Route path='/createpotluck'>
          <CreatePotluck
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          />
        </Route>
      </Switch>
      
    </>
  );
}

export default App;
