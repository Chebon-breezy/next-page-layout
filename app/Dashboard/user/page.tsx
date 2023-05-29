import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function user() {
  return (
    <main>
      <h1>Welcome User</h1> <br />
      <Link href={"/Dashboard"}>Dashboard</Link>
    </main>
  );
}
