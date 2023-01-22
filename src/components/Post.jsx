import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/guimontme.png" />
          <div className={styles.authorInfo}>
            <strong>Gui Mont</strong>
            <span>Dev Front-End</span>
          </div>
        </div>
        <time time="Jan 21, 2023 at 08:24" dateTime='2023-01-21 08:24:25' className={styles.time}>
          Published 1h ago
        </time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉{' '}&nbsp;{' '}<a href='#'> jane.design/doctorcare</a></p>
        <p>
          <a href='#'>#novoprojeto</a>{' '}
          <a href='#'>#nlw</a> {' '}
          <a href='#'>#rocketseat</a></p>
      </div>

      <form className={styles.commentForm}>
        <h3>Leave your feedback</h3>
        <textarea placeholder="Leave your feedback"></textarea>
        <footer>
          <button type="submit">Comment</button>
        </footer>
      </form>

      <Comment />

    </article>
  )
}