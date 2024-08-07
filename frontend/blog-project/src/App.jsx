import { useState } from 'react'
import './App.css'
import CreatePost from './components/Posts/CreatePost'
import PostsList from './components/Posts/PostsList'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import UpdatePost from './components/Posts/UpdatePost'
import PostDetails from './components/Posts/PostDetails'
import Login from './components/User/Login'
import Register from './components/User/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<CreatePost />} path="/create-post" />
        <Route element={<PostsList />} path="/list-posts/" />
        {/* <Route element={<UpdatePost />} path="/posts/:id" /> */}
        <Route element={<PostDetails />} path="/posts/:id" />
        <Route element={<Login />} path="/user-login" />
        <Route element={<Register />} path="/user-register" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
