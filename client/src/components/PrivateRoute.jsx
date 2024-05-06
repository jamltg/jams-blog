//this component is for pages that should not show up when searced right away

//we need to know if user is authenticated or not
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  const {currentUser} = useSelector((state)=>state.user);

  return (
    currentUser ? <Outlet/> : <Navigate to="/sign-in"/>
  )
}
