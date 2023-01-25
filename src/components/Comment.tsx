import styles from './Comment.module.css';
import { Trash, ThumbsUp  } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  
  const [clapCount, setClapCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setClapCount(clapCount + 1);

    setClapCount((state) => {
      return state + 1;
    });
  }

  return(
    <div className={styles.comment}>
      <Avatar src="https://github.com/guimontme.png" hasBorder={false} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
            <strong>Gui Mont <span>(you)</span></strong> 
            <time title="Jan 21, 2023 at 08:24" dateTime='2023-01-21 08:24:25' className={styles.time}>13 min ago</time>
            </div>
            <button className={styles.commentDelete} title="Delete Comment" onClick={handleDeleteComment}><Trash size={24} /></button>
          </header>
          <p>{content}</p>
        </div>
        
        <footer className={styles.commentActions}>
          <button onClick={handleLikeComment}>
            <ThumbsUp size={20} /> Applaud <span>{clapCount}</span>
          </button>
        </footer>
      </div>

      
    </div>
  )
}