import styles from './MainLayout.module.css'; 
import Head from 'next/head'; 
import {Navbar} from '../Navbar'; 


export const MainLayout = ({ children }) => {
    return (
        <div className={styles.container}>
          <Head>
            <title>Home - Enrique</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <Navbar></Navbar>
    
          <main className={styles.main}>
           { children }
          </main>
    
        </div>
      )
}
