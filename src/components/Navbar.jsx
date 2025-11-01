import { Link, NavLink } from "react-router";
import logo from "../assets/img/firebase-logo.png";
import MyContainer from "./MyContainer";
import MyLink from "./MyLink";
import { use} from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { ClockLoader } from "react-spinners";
// import MyLink from "./MyLink";


const Navbar = () => {

  // const result = useContext(AuthContext)
  const {user, signoutUserFunc, setUser, loading, setLoading } = use(AuthContext);
  console.log(user);

    const handleSignout = () => {
        signoutUserFunc()
          .then(() => {
          toast.success("signout successful");
          setUser(null);
        })
     .catch((e) => {
      toast.error(e.message);
   });
 };



  return (
    <div className="bg-slate-100f py-3 border-b border-b-slate-300 ">
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
          {user && (<li>
            <MyLink to={"/profile"} className="font-semibold">Profile</MyLink>
          </li>
        )}
      
        </ul>
   
      {loading ? <ClockLoader color="#AD47FF" className="mr-30"/>
      : user ? (
           <div className="text-center space-y-3">

          <div className="dropdown">
              <div tabIndex={0} role="button" className="mr-30 m-1"> 
                <img
               src={user?.photoURL || "https://via.placeholder.com/88"}
               className="h-[45px] w-[45px] rounded-full mx-auto"
                alt=""
                 />
              </div>
            <div tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
             
                <h2 className="text-xl font-semibold">{user?. displayName}</h2>
                <p className="text-white/80">{user?. email}</p>
                <button onClick={handleSignout} className="my-btn">
                Sign Out
                </button>
            </div>
          </div>
            </div>
          ) : ( 
              <button className="bg-purple-500 text-white px-4 py-2 rounded-md font-semibold cursor-pointer mr-30">
              <Link to={"/signin"}>Sign in</Link>
              </button>
        )}
      
      </MyContainer>
    </div>
  );
};

export default Navbar;
