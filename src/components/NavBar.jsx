import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </ul>
    </nav>
  );
};

export default NavBar;
