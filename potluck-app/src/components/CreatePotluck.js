import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function CreatePotluck(props) {
    const {
        values,
        change,
        submit
    } = props

    const onChange = evt => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    return (
    <>
        <form onSubmit={onSubmit}>
        
            <TextField
                id='date'
                label='Choose your date'
                type='date'
                name='date'
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <TextField
                label='Choose Time'
                type='time'
                name='time'
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
                inputProps={{
                    step: 300,
                }}
            />
            <TextField
                label='Location'
                type='text'
                value={values.location}
                name='location'
                onChange={onChange}
            />
            <TextField
                label='Items'
                type='text'
                value={values.item}
                name='item'
                onChange={onChange}
            />
            
            <br/>
            <button className="btnStyle" >Create Potluck</button>
        
        </form>
    </>
    )
}
