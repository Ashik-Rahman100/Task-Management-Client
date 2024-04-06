import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header";

export default function Main() {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  )
}
