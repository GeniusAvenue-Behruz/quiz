import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a className="text-gray-900 text-base no-underline hover:no-underline font-extrabold text-xl" href="#">Ta'limiy Savollar</a>
        </div>
        <div className="block lg:hidden pr-4">
          <button onClick={() => setIsOpen(!isOpen)} className="flex items-center p-1 text-orange-800 hover:text-gray-900">
            <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} lg:block mt-2 lg:mt-0 bg-white z-20`} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="inline-block py-2 px-4 text-gray-900 font-bold no-underline" href="#">Home</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">About</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">Quiz Topics</a>
            </li>
            <li className="mr-3">
              <a className="inline-block text-gray-600 no-underline hover:text-gray-900 hover:text-underline py-2 px-4" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
