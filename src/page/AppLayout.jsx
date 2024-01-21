// import DataTable from "../components/DataTable";
// import AppNav from "../components/AppNav";
// import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
// import styles from "./AppLayout.module.css";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

function AppLayout() {
  return (
    // <div className={styles.app}>
    <div className="grid grid-cols-[300px_auto] h-svh">
      {/* <Sidebar /> */}
      {/* <DataTable /> */}
      <Header />
      <Sidebar />
      <main className="bg-slate-200 p-4 row-span-11">
        <Outlet />
      </main>
      {/* <AppNav /> */}
    </div>
  );
}

export default AppLayout;
