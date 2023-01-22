import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
export function Comment() {
  return(
    <div className={styles.comment}>
      <Avatar src="https://github.com/guimontme.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Gui Mont <span>(you)</span></strong> 
            <time time="Jan 21, 2023 at 08:24" dateTime='2023-01-21 08:24:25' className={styles.time}>13min ago</time>
            </div>
            <button className={styles.commentDelete} title="Delete Comment"><Trash size={24} /></button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        
        <footer className={styles.commentActions}>
          <button>
            <ThumbsUp size={20} /> Like <span>20</span>
          </button>
        </footer>
      </div>

      
    </div>
  )
}