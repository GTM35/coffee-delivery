import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
