import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router';

function Signup() {
    const [error, setError] = useState('');
    const {push} = useHistory()
    const [details, setDetails] = useState({name:'', username:'', password: ''})

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
                <h2 className = 'form-title'>Sign up</h2>
                {(error !== '') ? (<div className = 'error'>{error}</div>) : ''}
                <div className ='form-group'>
                    <label htmlFor ='username'>Name: </label>
                    <input type ='name' name ='name' id = 'name' onChange ={e => setDetails({...details, name: e.target.value})} value ={details.name}/>
                </div>
                <div className ='form-group'>
                    <label htmlFor ='username'>Username: </label>
                    <input type ='username' name ='username' id = 'username' onChange ={e => setDetails({...details, username: e.target.value})} value ={details.username}/>
                </div>
                <div className ='form-group'>
                    <label htmlFor ='password'>Password: </label>
                    <input type ='password' name ='password' id = 'password' onChange ={e => setDetails({...details, password: e.target.value})} value ={details.password}/>
                </div>
                <input type = 'submit' value ='SIGNUP' className='submit'/>

            </div>
        </form>
    )
}

export default Signup;