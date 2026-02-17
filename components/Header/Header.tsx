import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.hGroup}>
        <h1>Sete Studio</h1>
        <ul>
          <li>Visual Identities</li>
          <li>Web Design / Development</li>
          <li>Motion Graphics</li>
        </ul>
      </div>
      <a href="mailto:info@sete.ee">info@sete.ee</a>
    </header>
  );
}
