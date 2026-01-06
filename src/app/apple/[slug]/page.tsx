
'use client'

import { useParams } from "next/navigation";
import styles from "../../page.module.css";

export default function Home() {

    const params = useParams()
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        ДИНАМИЧЕСКИЙ РОУТ для {params.slug}
       <h2>[ slug ]</h2>
      </main>
    </div>
  );
}
 

////когда роут динамический, то можно написать apple/blablabla
///b мы попадем на страницу, которая в папке [slug]


///как прочитать это slug
///хук useParams из next
///хуки нельзя использовать в сервернойц кромпоненте, только тв клиентской
///делаем странимцу клиентской с помощью 'use client'

///теперь по адресу apple/abracadabra будет написано 
/////ДИНАМИЧЕСКИЙ РОУТ для abracadabra