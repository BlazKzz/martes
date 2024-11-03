import React from 'react';
import Navbar from './Components/Header/Navbar';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './Components/Products/Products';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import HomePage from './Components/Home/Home';
import Notebookpage from './Components/Notebook/Notebook'



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Notebookpage" element={<Notebookpage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<ItemDetail />} />
      </Routes>
<<<<<<< HEAD
      {/* <Footer /> */}
=======
      <Footer />
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
    </Router>
  );
}

export default App;