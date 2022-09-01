
import './App.css';
import AddUser from './AddUser/AddUser';
import UserList from './UserList/UserList';
import { useState } from 'react';

function App() {
  const [allData, setAllData] = useState([])
  const addUserHandler = (userInfo) => {
    setAllData((prevData) => {
      return [...prevData, userInfo]
    })
  }
  return (
    <div>
     <AddUser onAddUser={addUserHandler}/>
     <UserList users={allData} />
    </div>
  );
}

export default App;
