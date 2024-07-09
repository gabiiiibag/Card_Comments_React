import { useState } from "react"

export default function App() {
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    const newComment = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      comment: comment,
      createdAt: new Date()
    }
    setComments((state) => [newComment, ...state])
    setEmail("")
    setComment("")
  }

  return (
    <div className="app">
      <h1>Sessão de comentários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)} />
        <br />
        <label htmlFor="comment">Comentário</label>
        <textarea
          id="comment"
          cols="30"
          rows="5"
          value={comment}
          onChange={(ev) => setComment(ev.target.value)}
        >
        </textarea>
        <br />
        <button>Enviar comentário</button>
      </form>
      <section className="comments">
        {comments.length > 0
          ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <h3>{comment.email}</h3>
                <span>Em {comment.createdAt.toLocaleString()}</span>
                <p>{comment.comment}</p>
              </div>
            )))
          : (
            <p>Seja o primeiro a comentar!</p>
          )}
      </section>
    </div>
  )
}