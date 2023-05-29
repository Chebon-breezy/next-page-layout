import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Dashboard() {
  return (
    <main>
      <h1>Welcome to Dashboard</h1>
      <Link href={"/Dashboard"}>Dashboard</Link> <br />
      <Link href={"/Dashboard/user"}>user</Link>
    </main>
  );
}
