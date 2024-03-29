import styles from './Sidebar.module.css';

import { PencilSimpleLine } from 'phosphor-react';

import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/guimontme.png" />
        <strong>Gui Mont</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="">
        <PencilSimpleLine className={styles.icon}/>  Edit your profile
        </a>
      </footer>

    </aside>
  );
}