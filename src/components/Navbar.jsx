import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { use} from "react";
import { AuthContext } from "../context/AuthContext";
// import MyLink from "./MyLink";


const Navbar = () => {

  // const result = useContext(AuthContext)
  const {user} = use(AuthContext);
  console.log(user);
  return (
    <div className="bg-slate-100f py-2 border-b border-b-slate-300 ">
      {/* <div className="flex items-center justify-between"> */}
      <MyContainer className="flex items-center justify-between">
        <figure>
          <img src={logo} className="w-[55px]" />
        </figure>
        <ul className="flex items-center gap-5">
          <li>
            <MyLink to={"/"} className="font-semibold">Home</MyLink>
            {/* <NavLink to={"/"} className={({isActive})=> isActive ? "text-red-500 font-semibold" : ""}>Home</NavLink> */}
          </li>
          <li>
           <MyLink to={"/about-us"} className="font-semibold">About Us</MyLink>
          </li>
          <li>
            <MyLink to={"/profile"} className="font-semibold">Profile</MyLink>
          </li>
      
        </ul>

        <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer">
          <Link to={"/signin"}>Sign in</Link>
        </button>
      </MyContainer>
    </div>
  );
};

export default Navbar;
