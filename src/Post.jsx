export function Post(props) {
    return (
        <div className="post-container">
            <h2>{props.title ?? 'Title'}</h2>
            <small>by <strong>{props.author ?? 'Author'}</strong></small>
            <p>{props.content ?? 'Content of the post'}</p>
        </div>
    )
}
