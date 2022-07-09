import {Post} from './Post'
import {Header} from './components/Header'

import './global.css';
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post  />
          <Post  />
        </main>
      </div>
    </>
  )
}
