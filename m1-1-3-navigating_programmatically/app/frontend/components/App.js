import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// PROBLEM 1 - use the useNavigate hook to create a navigate function inside App

// PROBLEM 2 - make the "Home" button navigate programmatically to "/"

// PROBLEM 3 - make the "Careers" button navigate programmatically to "/careers"

// PROBLEM 4 - make the "Blog" button navigate programmatically to "/blog"

const Home = () => <h3 style={{ ...style}}>This is the Home page</h3>
const Careers = () => <h3 style={{ ...style, borderColor: "red"}}>This is the Careers page</h3>
const Blog = () => <h3 style={{ ...style, borderColor: "green"}}>This is the Blog page</h3>

const style = {padding: '10px', border: "5px solid black"}

export default function App() {
  const navigate = useNavigate()
  return (
    <div>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/careers")}>Careers</button>
        <button onClick={()=> navigate("/blog")}>Blog</button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="careers" element={<Careers />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </div>
  )
}
