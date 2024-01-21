import AppNav from "./AppNav";
import Logo from "./Logo";

// import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className="bg-slate-50 p-4 border-r-4 grid row-span-12 row-start-1 auto-rows-min">
      <Logo />
      <AppNav />

      {/* <p>List of Menu</p> */}

      {/* <footer className={styles.footer}> */}
      <footer>
        {/* <p className={styles.copyright}> */}
        <p>&copy; Copyright{new Date().getFullYear()} by world Inc.</p>
      </footer>
    </aside>
  );
}

export default Sidebar;
