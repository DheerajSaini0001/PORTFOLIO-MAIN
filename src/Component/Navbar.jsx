// import './Main.css'

import Aboutme from './Aboutme';
import './Navbar.css'
function Navbar()
{
    return(
        <>
  <nav className=" border-gray-200 bg-opacity-100 bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a
      href="#"
      className="flex items-center space-x-3 rtl:space-x-reverse"
    >
    
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
      {/* <i className='Name text-xl text-blue-700'>Dheeraj</i> */}
      <h1 class="text">
        <span class="letter letter-1">D</span>
        <span class="letter letter-2">H</span>
        <span class="letter letter-3">E</span>
        <span class="letter letter-4">E</span>
        <span class="letter letter-2">R</span>
        <span class="letter letter-4">A</span>
        <span class="letter letter-4">J</span>
    </h1>
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="#"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
        <li className='button-33'>
          <a
            href="#"
            className="Home text-black font-bold "
            aria-current="page"
          >
            <i>Home</i>
          </a>
        </li>
        <li className='button-33'>
          <a
            href="#"
            className="About text-black font-bold"
          >
         <i>   About</i>
          </a>
        </li>
        <li className='button-33'>
          <a
            href="#"
            className="Services text-black font-bold"
          >
          <i>  Services</i>
          </a>
        </li>
        <li className='button-33'>
          <a
            href="#"
            className="Portfolio text-black font-bold"
          >
            <i>Portfolio</i>
          </a>
        </li>
        <li className='button-33'>
          <a
            href="#"
            className="Contact text-black font-bold"
          >
           <i> Contact</i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


 

</>

    )
}

export default Navbar;