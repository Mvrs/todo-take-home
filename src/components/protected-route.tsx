import { Navigate } from "react-router-dom";

interface Props {
  isAuth?: boolean;
  redirectPath?: any;
  children?: React.ReactNode | any;
}

const ProtectedRoute = ({ children, isAuth, redirectPath }: Props) => {
  return isAuth ? children : <Navigate to={redirectPath} replace />;
};

export default ProtectedRoute;
