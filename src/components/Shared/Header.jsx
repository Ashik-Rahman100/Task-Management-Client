import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="navbar bg-[#1a0a36] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1a0a36] text-white h-32 rounded-box w-52"
          >
            <li>
              <a className="text-xl bold hover:bg-white hover:text-black">
                Add Task
              </a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">Task Management</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a
              className="text-xl bold hover:bg-white hover:text-black"
              onClick={() => navigate("/addTodo")}
            >
              Add Task
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {/* <div onClick={() => navigate("/addTodo")} className="flex items-center space-x-2 btn btn-outline btn-primary">
          <RxPlus />
          <button>Create Todo</button>
        </div> */}
        <div className="flex items-center space-x-2 btn btn-outline btn-primary ">
          {/* <RxPlus /> */}
          <Link to="/signin">
            <button className="text-white">Sign In</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
