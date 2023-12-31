import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();

    setUser(null);
  }

  return (
    <nav className='nav'>
      <Link to='/'>Home</Link>
      &nbsp; | &nbsp;
      <Link to='/orders/new'>New Note</Link>
      &nbsp;&nbsp; <span>Welcome back, {user.name}</span>
      &nbsp;&nbsp;
      <Link to='' onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
