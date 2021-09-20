import axios from 'axios';
import React, {useState} from 'react'
import { Link} from 'react-router-dom';
import { useHistory } from 'react-router';

function Login() {
    const [error, setError] = useState('');
    const {push} = useHistory()
    const [details, setDetails] = useState({username:'', password: ''})

    const submitHandler = e =>{
        e.preventDefault();
    //     axios.post(/*Insert endpoint*/, details)
    //     .then(res=>{
    //         console.log('Submit', res.data)
    //         localStorage.setItem('token', res.data.token);
    //         setAuth(res.data.token)
    //         push('/')
    //     })
    }

    return (
        <form onSubmit ={submitHandler}>
            <div className ='form-card'>
                <h2 className = 'form-title'>Login</h2>
                {(error !== '') ? (<div className = 'error'>{error}</div>) : ''}
                <div className ='form-group'>
                    <label htmlFor ='username'>Username: </label>
                    <input type ='username' name ='username' id = 'username' onChange ={e => setDetails({...details, username: e.target.value})} value ={details.username}/>
                </div>
                <div className ='form-group'>
                    <label htmlFor ='password'>Password: </label>
                    <input type ='password' name ='password' id = 'password' onChange ={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                </div>
                <input type = 'submit' value ='LOGIN' className='submit'/>
                <Link to ='/signup'>Don't have an account? Sign up!</Link>
            </div>
        </form>
    )
}

export default Login