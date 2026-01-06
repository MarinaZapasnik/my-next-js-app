
import Image from "next/image";
import styles from "../page.module.css";
import logo from '../../../public/logo.svg'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        MAIN PAGE
        <Image src={logo} alt='i am mega programmist'/>
      </main>
    </div>
  );
}
 

//основная фича некста позволяет не использовать реакт роутинг, это все зашито внутри некста
////апп-роутер в нексте-это папка agg? нужно следиитьт за попочной системой
///внутри папки дожен быть файл page.tsx