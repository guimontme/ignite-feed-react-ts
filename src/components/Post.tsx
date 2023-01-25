import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  avatarUrl: string;
  role: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

export function Post({author, publishedAt, content}: PostProps) {
  
  const [comments, setComments] = useState(['Psot bem bacana, hein?!']);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedAtDateFormatted = format(
    publishedAt,
    "MMMM ',' dd yyyy 'at' HH:mm", 
    // "d 'de' LLLL 'de' yyyy 'às' HH:mm", 
    // {locale: ptBR}
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    // locale: ptBR, 
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentValid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Field obligatory*');
  }

  function deleteComment(commentToDelete: string) {
    console.log(`Delete Comment: ${commentToDelete}`);
    const commentsWithoutDeletedOne = comments.filter(comment => {
        return comment !== commentToDelete
      }
    );
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedAtDateFormatted} dateTime={publishedAt.toISOString()} className={styles.time}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      
      <div className={styles.content}>
        {content.map( line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          } 
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <h3>Leave your feedback</h3>
        <textarea 
          placeholder="Leave your feedback" 
          name="comment"
          value={newCommentText}
          onChange={handleNewCommentChange} 
          onInvalid={handleNewCommentValid} 
          required
        ></textarea>
        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >Comment</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (<Comment key={comment} content={comment}  onDeleteComment={deleteComment} />)
        })}
      </div>

    </article>
  )
}