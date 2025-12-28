import { ThemeProvider } from '@mui/material/styles'
import amazonTheme from './styles/theme/theme'
import CssBaseline from '@mui/material/CssBaseline' 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProductsProvider } from './context/ProductsContext';
import { ReducerProvider } from './context/CardContext';
import Home from './pages/Home'
import CardPage from './pages/Card';

import './App.css'
import Navbar from './componant/Navbar'
import Footer from './componant/Footer';

import {BrowserRouter as Router,Routes,Route}  from"react-router-dom"
import Shop from './pages/shop'
import Contact from './pages/contact'
import NotFuond from './pages/NotFound'

function App() {

  


  return (
 <div style={{maxWidth:"100vw",overflow:"hidden"}}>
<ProductsProvider>
  <ReducerProvider>
 <ThemeProvider theme={amazonTheme}>
  <CssBaseline/>
<Router>
<Navbar/>

  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/card' element={<CardPage/>}/>
    <Route path='*' element={<NotFuond/>}/>
  </Routes>
  <Footer/>
</Router>
</ThemeProvider>
</ReducerProvider>
</ProductsProvider>
 </div>
  )
}

export default App
