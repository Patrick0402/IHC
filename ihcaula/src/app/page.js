import Image from "next/image";
import styles from "./page.module.css";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className={styles.main}>
      <Menu/>
      <h1>Home</h1>
    </main>
  );
}
