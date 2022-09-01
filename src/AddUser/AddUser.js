import React, { useState } from 'react';
import './AddUser.css'
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../ErrorModal/ErrorModal';


const AddUser = (props)  => {
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);


  const submitHandler = (event) =>{
    event.preventDefault();
    if(username.trim().length === 0 || userAge.trim().length === 0){
      setError({
        title: "Invalid Input",
        message: "please enter valid none blank data"
      });
      // setIsValid(false);
      return;
    }
    if (parseInt(userAge) < 1){
      //parseInt
      setError({
        title: "Invalid age",
        message: "please enter age above 0"
      })
      return;
    }

    const userData = {
      name: username,
      age: userAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    console.log(username, userAge);
    setUsername("");
    setUserAge("");
    setIsValid(true);
  }
  //name
  const nameChangeHandler = (event) => {
    setUsername(event.target.value);
    console.log(username, userAge);
  };
  //age
  const ageChangeHandler = (event) => {
    setUserAge(event.target.value);
   
  };
  const errorHandler = () =>{
    setError(null);
  }
  return (
    <div>
      {error ? (
        <ErrorModal 
        title={error.title} 
        message={error.message}
        onConfirm={errorHandler} />
      ): (
        ""
      )}
    
    <Card className={`input ${!isValid ? "invalid" : ""}`}>
        <form onSubmit={submitHandler}>
        <label htmlFor="username" 
        // style={{ color: !isValid ? "red" : "black" }}
        >Username</label>
        <input type="text" id='username' onChange={nameChangeHandler} value={username}/>
        <label htmlFor="age">Age (in years)</label>
        <input type="number" id='age' onChange={ageChangeHandler} value={userAge}/>
        <Button type="submit">Add User</Button>
    </form>
    </Card>
    </div>
  )
  
}


export default AddUser