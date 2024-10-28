import { useState } from 'react'
import './App.css'
import CommentsForm from './CommentsForm'
import Comment from "./Comment";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Comment />
    </>
  )
}

export default App
