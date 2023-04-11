import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import PrimaryNavigation from "../../components/primary-nav/primary-nav.component";

const MainLayout = () => {
  return (
    <Fragment>
      <PrimaryNavigation />
      <Outlet />
    </Fragment>
  );
}

export default MainLayout;