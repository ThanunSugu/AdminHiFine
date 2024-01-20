import { useState } from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Login.module.css";
import BackButton from "../components/BackButton";

function Login() {
  const [email, setEmail] = useState("sample@example.com");
  const [password, setPassword] = useState("123456");

  return (
    <main className={styles.login}>
      <PageNav />

      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Link className="w-full" to="/app">
          <button className="bg-emerald-950 bg-emerald-950 w-full">
            Login
          </button>
        </Link>
        <BackButton />
      </form>
    </main>
  );
}

export default Login;
