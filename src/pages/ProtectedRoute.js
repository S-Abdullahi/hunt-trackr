import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  if (!user) {
   return <Navigate to='/login' />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;
