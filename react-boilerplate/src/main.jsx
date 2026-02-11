import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Showcase from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import Gallery from './pages/gallery.jsx'
import GalleryDetails from './pages/GalleryDetails.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductDetails />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="gallery/:imageId" element={<GalleryDetails />} />
          <Route
            path="*"
            element={
              <div className="page">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
