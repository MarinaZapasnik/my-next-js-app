
import Image from "next/image";
import styles from "../page.module.css";
import logo from '../../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src={logo} alt='i am mega programmist'/>
      </main>
    </div>
  );
}
 