import Image from "next/image";
import styles from "./page.module.css";
import ProfilePage from "@/app/profile/page";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        

        <ProfilePage/>
      </main>
    </div>
  );
}
