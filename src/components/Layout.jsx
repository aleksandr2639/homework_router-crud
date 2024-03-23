import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <>
      <header>
        <h1>App</h1>
      </header>

      <main className="container">
        <Outlet />
      </main>

      <footer>@2024</footer>
    </>
  );
};

export default Layout;
