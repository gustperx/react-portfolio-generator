import { Link } from "react-router-dom";
import { signOutFirebase } from "../../../../firebase/helpers/auth";
import { BarIcon, LogoutIcon } from "../icons";

const menuLinks = [
  {
    name: "Portfolios",
    to: "/admin",
  },
  {
    name: "Profile",
    to: "/admin",
  },
];

export const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <BarIcon />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuLinks.map((item) => (
              <li key={item.name}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Portfolio</a>
      </div>
      <div className="navbar-end">
        <button
          type="button"
          onClick={() => signOutFirebase()}
          className="btn btn-ghost btn-circle"
        >
          <LogoutIcon />
        </button>
      </div>
    </div>
  );
};
