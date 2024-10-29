import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <a href="/" className="logo">Gaming</a>
      <div className="search-bar">
        <input type="text" placeholder="Busca un Producto" />
      </div>
      <nav className="navbar">
        <div 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="/" onClick={toggleDropdown}>Tecnología</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
            <Link to="/Notebookpage">
              <h4>Notebooks</h4>
            </Link>
            <Link to="/monitores">
              <p>Gamer</p>
            </Link>
            <Link to="/monitores">
              <p>Trabajo y estudios</p>
            </Link>
            <Link to="/monitores">
              <p>Convertibles(2-en-1)</p>
            </Link>
            <Link to="/">
              <h4>Celulares</h4>
            </Link>
            <Link to="">
              <p>Samsung</p>
            </Link>
            <Link to="">
              <p>Iphone</p>
            </Link>
            <Link to="">
              <p>Xiaomi</p>
            </Link>
            <Link to="/">
              <h4>Consolas</h4>
            </Link>
            <Link to="">
              <p>Switch</p>
            </Link>
            <Link to="">
              <p>Play</p>
            </Link>
            <Link to="">
              <p>Xbox</p>
            </Link>
          </div>
        )}
      </div>
      <div 
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      > 
        <Link to="/">Hardware</Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/">
              <h4>Tarjetas de Video</h4>
            </Link>
            <Link to="">
              <p>Nvidia</p>
            </Link>
            <Link to="">
              <p>AMD Radeon</p>
            </Link>
            <Link to="/">
              <h4>Procesadores</h4>
            </Link>
            <Link to="">
              <p>Intel</p>
            </Link>
            <Link to="">
              <p>AMD</p>
            </Link>
            <Link to="/">
              <h4>Ram</h4>
            </Link>
            <Link to="">
              <p>DDR4 Desktop</p>
            </Link>
            <Link to="">
              <p>DDR4 Notebook</p>
            </Link>
          </div>
        )}
      </div>
      <div 
        className="dropdown"
        onMouseEnter={() => setDropdownOpen(true)}
        onMouseLeave={() => setDropdownOpen(false)}
      > 
        <Link to="/">Perifericos</Link>
        {isDropdownOpen && (
          <div className="dropdown-content">
            <Link to="/">
              <h4>Mouses</h4>
            </Link>
            <Link to="">
              <p>Opticos</p>
            </Link>
            <Link to="">
              <p>Laser</p>
            </Link>
            <Link to="">
              <p>Inalambricos</p>
            </Link>
            <Link to="/">
              <h4>Teclados</h4>
            </Link>
            <Link to="">
              <p>Mecanicos</p>
            </Link>
            <Link to="">
              <p>Inalambricos</p>
            </Link>
            <Link to="/monitores">
              <h4>Monitores</h4>
            </Link>
            <Link to="">
              <p>144Hz o más</p>
            </Link>
            <Link to="">
              <p>Con FreeSync</p>
            </Link>
            <Link to="">
              <p>Con G-Sync</p>
            </Link>
          </div>
          )}
        </div>
        <div 
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        > 
          <a href="/">Electro</a>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <a href="/"><h4>Televisores</h4>
                <a href="">LED</a>
                <a href="">OLED</a>
                <a href="">QLED</a>
              </a>
              <a href="/"><h4>Audio</h4>
                <a href="">Soundbars</a>
                <a href="">Parlantes Pc</a>
                <a href="">Parlastes</a>
              </a>
              <a href="/"><h4>Aspiradoras</h4>
                <a href="">De arrastre</a>
                <a href="">Robot</a>
                <a href="">Verticales</a>
              </a>
            </div>
          )}
        </div>
        <div 
          className="dropdown" 
          onMouseEnter={() => setDropdownOpen(true)} 
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="user-icon">
            <a href="">
              <FontAwesomeIcon icon={faUser } /> 
            </a>
          </div>
          {isDropdownOpen && (
            <div className='dropdown-content'>
              <a href="">Cuenta</a>
              <a href="">Ver Carrito</a>
              <a href="">Cerrar sesion</a>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;