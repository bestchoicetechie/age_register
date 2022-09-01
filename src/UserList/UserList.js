import './UserList.css';
import Card from "../UI/Card";


const UserList = (props) => {
  return (
    <Card className="users">
        <ul>
            {props.users.map((user) =>(
                <li key={user.id}>
                    {user.name} ({user.age} years old)
                </li>
                //pooja (19 years old)
            ))}
        </ul>
    </Card>
  );
}

export default UserList