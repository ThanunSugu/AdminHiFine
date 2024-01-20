import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Admin.module.css";

export default function Admin() {
  return (
    <main className={styles.admin}>
      <PageNav />
      <section>
        <h1>
          Welcome to admin HiFine.
          <br />
          You can control HiFine Data everything.
        </h1>
        <h2>
          Enjoy your exercises. Enjoy your time. Enjoy your life. Update your
          society. enjoy with your friends.
        </h2>
        <Link to="/login" className="cta">
          Login Admin page
        </Link>
      </section>
    </main>
  );
}
