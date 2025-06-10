import { useState } from 'react'


function App() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [isFormSubmitted,setIsFormSubmitted]=useState(false);
  const [error,setError]=useState(false);

  function handleSubmit(e){
     e.preventDefault();
     
    if(username==="user" && password==="password")
    {
      setIsFormSubmitted(true);
      setError(false);
    }
    else{
      setIsFormSubmitted(false);
      setError(true);
    }
  }

  
  
  return (
    <>
      <h1>Login Page</h1>
      {
        isFormSubmitted ? (
          <p>Welcome, user!</p>) :
       
        (
        
        <>
            {error && <p>Invalid username or password</p>}

            <form>
                <label htmlFor="fname">Username:</label>
                <input type="text" value={username} placeholder="username" required
                onChange={(e)=>setUsername(e.target.value)}
                />
                <br/>
                <label htmlFor="lname">Password:</label>
                <input type="password" value={password} placeholder="password" required
                onChange={(e)=>setPassword(e.target.value)}
                />
                <br/>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
          </form>
        </>

        )
      }
      
    </>
  )
}

export default App
