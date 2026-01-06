
import Image from "next/image";
import styles from "../page.module.css";
import apple from '../../../public/apple.svg'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        APPLE PAGE
        <Image src={apple} alt='apple'/>
      </main>
    </div>
  );
}
 

////внутри файла page.tsx должна быть дефолтная экспортируемая компонента
///иначе это не будет считаться роутом

///чтобы создать вложенный роут
///нужно создать директорию внутри директории



///динамические роуты создаются с помощью папки в квадратных скобках