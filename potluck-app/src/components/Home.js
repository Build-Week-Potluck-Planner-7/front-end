import React from 'react'
import { useHistory } from 'react-router'


export default function Home() {
    const history = useHistory();
  
    const routeToMyPotlucks = () => {
      history.push(`/mypotlucks`);
    }
    const routeToCreate = () => {
        history.push(`/createpotluck`);
      }
  
    return(
        <div>
            <button onClick={routeToMyPotlucks}>My Potlucks!</button>
            <button onClick={routeToCreate}>Create Potluck!</button>
            
        </div>
    )
    
  }