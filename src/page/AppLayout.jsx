import DataTable from "../components/DataTable";
// import AppNav from "../components/AppNav";
import Sidebar from "../components/SideBar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <DataTable />

      {/* <AppNav /> */}
    </div>
  );
}

export default AppLayout;
