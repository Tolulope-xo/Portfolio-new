import React, {useState} from 'react';
import {HiBars2} from 'react-icons/hi2'
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Nav = () => {
  const [navbar, setNavbar] = useState(false);

  const handleToggle = () => {
    setNavbar(!navbar);
  };
  return (
    <div>
<nav className="w-full  bg-black shadow">
<div className="justify-between px-4 mx-auto md:items-center md:flex md:px-8">
  <div className="flex items-center justify-between gap-[2rem] py-3 md:py-5 md:block">
      <h2 className="text-2xl m-[auto] w-100vw text-center md:text-left font-[Stix] md:m-0 text-white font-bold">Olatunji Tolulope O.</h2>
    <div className="block md:hidden">
      <button
        className="p-2 text-black"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <AiOutlineClose className="sm:absolute md:relative sm:left-[0] top-[0] text-[25px] text-white " />

        ) : (
          <HiBars2 className="absolute md:relative top-[1rem] text-[25px] text-white right-[5rem]" />
        )}
      </button>
    </div>
  </div>
  <div>
    <div
      className={` w-[20rem] md:flex-row md:items-center justify-self-center pb-3 mt-8 md:pb-0 md:mt-2 ${navbar ? 'block md:flex' : 'hidden md:flex'
        }`}
    >
      <ul className="block md:flex items-center justify-between w-[20rem] space-y-8 md:space-y-0">
        <li>
      <Link to="/" onClick={handleToggle} className='md:border-b-2 md:border-[black] text-[white]'>
      Home
          </Link>
          </li>
          <li>
          <Link to="/about" onClick={handleToggle} className='md:border-b-2 md:border-[black] text-[white]'>
      About
          </Link>
          </li>
          <li>
          <Link to="/projects" onClick={handleToggle} className='md:border-b-2 md:border-[black] text-[white]'>
      Portfolio
          </Link>
          </li>
          <li>
          <Link to="/contact" onClick={handleToggle} className='md:border-b-2 md:border-[black] text-[white]'>
      Contact
          </Link>
          </li>
      </ul>
    </div>
  </div>
</div>
</nav>
</div>
  );
}

export default Nav;


