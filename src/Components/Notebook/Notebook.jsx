import { Link } from 'react-router-dom';
import './Notebook.css';

export default function Notebookpage() {
    return (
      <div className="featured-categories">
        <h2>Categorías populares</h2>
        <div className="categories-grid">
<<<<<<< HEAD
          <Link to="#" className="category-card">
=======
          <Link to="/notebooks-gamer" className="category-card">
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            <img src="./public/Ngamer/G1.webp" alt="Notebooks gamer" />
            <div className="content">
            <h1>Notebook Gamer</h1>
            <h4>Eficaz para correr los juegos que quieras en cualquier lugar</h4>
            </div>
          </Link>
<<<<<<< HEAD
          <Link to="#" className="category-card">
=======
          <Link to="/ps5" className="category-card">
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            <img src="./public/Ngamer/G1.webp" alt="PS5" />
            <div className="content">
            <h1>Convertibles</h1>
            <h4>Se pueden utilizar cómo Notebook o tablet</h4>
            </div>
          </Link>
<<<<<<< HEAD
          <Link to="#" className="category-card">
=======
          <Link to="/smartphones-5g" className="category-card">
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            <img src="./public/Ngamer/G1.webp" alt="Smartphones 5G" />
            <div className="content">
            <h1>Trabajo y estudios</h1>
            <h4>Ideales para navegar y office</h4>
            </div>
          </Link>
<<<<<<< HEAD
          <Link to="#" className="category-card">
=======
          <Link to="/tarjetas-de-video-gamer" className="category-card">
>>>>>>> 783f2f3243cc4d86772f517db52ebe9fb8484bf1
            <img src="./public/Ngamer/G1.webp" alt="Tarjetas de video gamer" />
            <div className="content">
              <h1>Mochilas</h1>
              <h4>Mochilas y bolsos para llevar tu Notebook</h4>
            </div>
          </Link>
        </div>
      </div>
    );
  }

