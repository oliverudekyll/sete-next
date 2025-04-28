import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a className={styles.email} href="mailto:info@sete.ee">
        info@sete.ee
      </a>
    </main>
  );
}
