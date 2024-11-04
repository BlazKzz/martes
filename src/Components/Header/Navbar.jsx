import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
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
          onMouseEnter={() => handleMouseEnter('tecnologia')}
          onMouseLeave={handleMouseLeave}
        >
          <a href="/">Tecnología</a>
          {openDropdown === 'tecnologia' && (
            <div className="dropdown-content">
              <Link to="/Notebookpage"><h4>Notebooks</h4></Link>
              <Link to="/products"><p>Gamer</p></Link>
              <Link to="/products"><p>Trabajo y estudios</p></Link>
              <Link to="/products"><p>Convertibles (2-en-1)</p></Link>
              <Link to="/products"><h4>Celulares</h4></Link>
              <Link to="/products"><p>Samsung</p></Link>
              <Link to="/products"><p>Iphone</p></Link>
              <Link to="/products"><p>Xiaomi</p></Link>
              <Link to="/products"><h4>Consolas</h4></Link>
              <Link to="/products"><p>Switch</p></Link>
              <Link to="/products"><p>Play</p></Link>
              <Link to="/products"><p>Xbox</p></Link>
            </div>
          )}
        </div>
        
        <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('hardware')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/products">Hardware</Link>
          {openDropdown === 'hardware' && (
            <div className="dropdown-content">
              <Link to="/products"><h4>Tarjetas de Video</h4></Link>
              <Link to="/products"><p>Nvidia</p></Link>
              <Link to="/products"><p>AMD Radeon</p></Link>
              <Link to="/products"><h4>Procesadores</h4></Link>
              <Link to="/products"><p>Intel</p></Link>
              <Link to="/products"><p>AMD</p></Link>
              <Link to="/products"><h4>Ram</h4></Link>
              <Link to="/products"><p>DDR4 Desktop</p></Link>
              <Link to="/products"><p>DDR4 Notebook</p></Link>
            </div>
          )}
        </div>

        <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('perifericos')}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/products">Periféricos</Link>
          {openDropdown === 'perifericos' && (
            <div className="dropdown-content">
              <Link to="/products"><h4>Mouses</h4></Link>
              <Link to="/products"><p>Ópticos</p></Link>
              <Link to="/products"><p>Láser</p></Link>
              <Link to="/products"><p>Inalámbricos</p></Link>
              <Link to="/products"><h4>Teclados</h4></Link>
              <Link to="/products"><p>Mecánicos</p></Link>
              <Link to="/products"><p>Inalámbricos</p></Link>
              <Link to="/products"><h4>Monitores</h4></Link>
              <Link to="/products"><p>144Hz o más</p></Link>
              <Link to="/products"><p>Con FreeSync</p></Link>
              <Link to="/products"><p>Con G-Sync</p></Link>
            </div>
          )}
        </div>

        <div 
          className="dropdown" 
          onMouseEnter={() => handleMouseEnter('user')}
          onMouseLeave={handleMouseLeave}
        >
          <div className="user-icon">
            <Link to="#">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          {openDropdown === 'user' && (
            <div className="dropdown-content">
              <Link to="/cuenta"><p>Cuenta</p></Link>
              <Link to="/carrito"><p>Ver Carrito</p></Link>
              <Link to="/cerrar-sesion"><p>Cerrar sesión</p></Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
