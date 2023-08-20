import { Link } from 'react-router-dom';

import LogoutLink from './LogoutLink';
import MenuButton from './MenuButton';
import MenuCloseIcon from './MenuCloseIcon';

const links = [
  { path: '/', text: 'Consoles' },
  { path: '/reserve', text: 'Reserve a console' },
  { path: '/reservations', text: 'My reservations' },
  { path: '/new', text: 'Add a new console' },
  { path: '/delete', text: 'Delete a console' },
];

function handleMenuClick() {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
}

function MobileMenu() {
  return (
    <div
      className="absolute top-0 right-0 w-full text-left bg-gray-100 px-4 pt-4 pb-8 lg:hidden hidden"
      id="menu"
    >
      <MenuButton onClick={handleMenuClick} icon={<MenuCloseIcon />} />

      <ul className="text-center">
        {links.map((link) => (
          <li key={link.path} onClick={handleMenuClick}>
            <Link
              to={link.path}
              className="py-2 hover:bg-gray-200 rounded w-full block font-semibold"
            >
              {link.text}
            </Link>
          </li>
        ))}
        <li onClick={handleMenuClick}>
          <LogoutLink />
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
