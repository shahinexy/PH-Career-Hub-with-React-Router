import { NavLink } from "react-router-dom";

const Header = () => {
  const navItems = <> 
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><NavLink to={'/applied'}>Applied Job</NavLink></li>
    <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
    <li><NavLink to={'/blog'}>Blog</NavLink></li>
  </>
  return (
    <div>
      <nav>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
              >
                {navItems}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl text-primary font-bold">Career Hub</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-5 text-lg">
              {navItems}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-primary text-white text-lg font-semibold">Star Applying</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
