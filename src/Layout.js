import { Outlet } from "react-router-dom";
import InnerHeader from "./componet/inner-header";

const Layout = () => {
  return (
    <>
      <InnerHeader />

      <Outlet />
    </>
  );
};

export default Layout;
