
import Image from "next/image";
import styles from "../../page.module.css";
import orange from '../../../../public/orange.svg'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        ORANGE PAGE
        <Image src={orange} alt='orange'/>
      </main>
    </div>
  );
}
 


////страница orange будет по адресу apple/orange
////apple и orange - это названия директорий!!!