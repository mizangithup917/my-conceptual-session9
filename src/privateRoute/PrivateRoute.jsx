import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';
import { HashLoader } from 'react-spinners';
import { useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

  const { user, loading } = use(AuthContext);
  const location = useLocation()
  console.log(location);

  if(loading) {
    return (
      <div className='h-[97vh] flex items-center justify-center' >
          <HashLoader color="#a73ffc"/>
      </div>
        
    ) 
  }

  if (!user) {
    return <Navigate to="/signin" state={location.pathname} />;
  }
  
  return children;
};

export default PrivateRoute;