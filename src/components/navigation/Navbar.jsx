import { Link } from 'react-router-dom';

import Logout from './logout';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';

const links = [
  { path: '/', text: 'Home' },
  { path: '/dummy', text: 'Dummy' },
];

const handleMenuClick = () => {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
};

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 relative">
      <MenuIcon onClick={handleMenuClick} />

      <span className="hidden lg:inline-block">Logo</span>

      <div
        className="absolute top-0 right-0 w-full text-left bg-gray-100 p-4 lg:hidden hidden"
        id="menu"
      >
        <MenuIcon onClick={handleMenuClick} />

        <ul className="text-center">
          {links.map((link) => (
            <li
              key={link.path}
              className="py-2 hover:bg-gray-200 rounded"
              onClick={handleMenuClick}
            >
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
          <li
            className="py-2 hover:bg-gray-200 rounded"
            onClick={handleMenuClick}
          >
            <Logout />
          </li>
        </ul>
      </div>

      <SearchIcon />
    </nav>
  );
}

export default Navbar;
