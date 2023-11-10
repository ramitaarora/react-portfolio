import { NavLink } from 'react-router-dom';

export default function Nav() {

  return (
    <nav className="flex flex-row justify-between bg-gray-800 text-white p-3">
    
      <div>
        <p>Ramita's Portfolio</p>
      </div>
      
      <div className="w-96 flex flex-row align-center justify-evenly">
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/About">About</NavLink>
        <NavLink to="/Portfolio">Portfolio</NavLink>
        <NavLink to="/Contact">Contact</NavLink>
        <NavLink to="/Resume">Resume</NavLink>
      </div>
            
    </nav>
  );
};