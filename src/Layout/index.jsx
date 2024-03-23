import React from "react";
import "./index.css";
import ErrorBoundary from "../Components/Error";

const Navbar = React.lazy(() => import("../Components/Navbar"));
const Sidebar = React.lazy(() => import("../Components/Sidebar"));

const Layout = (props) => {
  return (
    <ErrorBoundary key={1}>
      <React.Fragment>
        <Navbar />
        <Sidebar />
        <div className="main-content">{props?.component}</div>
      </React.Fragment>
    </ErrorBoundary>
  );
};

export default Layout;
