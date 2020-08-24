import React, { useState, useEffect } from 'react';
import axios from "axios";

import './App.css';


function App() {

  const [users, initializeUsers] = useState([])

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res=>{
            console.log(res)
            initializeUsers(res.data)
          })
          .catch(err=>{console.log(err)})
  }, [])



  return (
    <div className="App">
      <ol>
        {
          users.map(u => <li key={u.id}>{u.name}</li>)
        }
      </ol>
     </div>
  );
}

export default App;
