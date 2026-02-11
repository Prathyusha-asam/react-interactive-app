import './App.css'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header>
        <h1>React Router Demo</h1>
        <nav className="nav">
          <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
          <Link to="/showcase">Showcase</Link> |{' '}
          <Link to="/products">Products</Link>| {' '}
          <Link to="/gallery">Stranger Things</Link> 
        </nav>
      </header>
      <main>
        {/* This is where the matched route will be rendered */}
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
