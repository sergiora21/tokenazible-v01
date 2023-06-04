import React from 'react';

const Users = () => {
  const toggleProfileDropdown = () => {
    var dropdown = document.getElementById("profile-dropdown-content");
    dropdown.classList.toggle("show");
  };

  const showProfile = (name, amount, creditScore, description) => {
    console.log("Nombre: " + name);
    console.log("Cantidad solicitada: " + amount);
    console.log("Calificación crediticia: " + creditScore);
    console.log("Descripción: " + description);
  };

  return (
    <div>
      <header>
  <div className="menu-bar">
    <div className="logo" onClick={() => window.location.href='index.html'}>Logo</div>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li>
          <div className="profile-dropdown">
            <div className="profile-tab" onClick={toggleProfileDropdown}>Perfil</div>
            <div className="profile-dropdown-content" id="profile-dropdown-content">
              <div className="user-profile" id="my-profile">
                <h3>Nombre: Juan Pérez</h3>
                <p><strong>Cantidad solicitada:</strong> S/ 10,000</p>
                <p><strong>Calificación crediticia:</strong> Excelente</p>
                <p>Descripción del perfil y los préstamos que estoy buscando.</p>
                <p><a href="index.html">Cerrar sesión</a></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</header>


      <div className="main-content">
        <h1>Loan Platform</h1>
        <h2>Perfiles de personas que buscan préstamos:</h2>
        <div className="profile-menu" id="profile-menu">
          {/* Profile cards */}
        </div>
      </div>

      <style jsx>{`
  /* Estilo para la barra de menú */
  .menu-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    padding: 10px;
  }

  .menu-bar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu-bar ul li {
    display: inline-block;
    margin-right: 20px;
  }

  .menu-bar ul li a {
    text-decoration: none;
    color: #333;
    font-weight: bold;
  }

  .menu-bar ul li a:hover {
    color: #555;
  }

  /* Estilo para el menú desplegable del perfil */
  .profile-dropdown {
    position: relative;
  }

  .profile-tab {
    cursor: pointer;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 4px;
  }

  .profile-dropdown-content {
    position: absolute;
    top: 30px;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 10px;
    display: none;
    min-width: 200px;
    z-index: 1;
  }

  .profile-dropdown-content.show {
    display: block;
  }

  .profile-dropdown-content h3 {
    margin-top: 0;
  }

  .profile-dropdown-content p {
    margin-bottom: 5px;
  }

  .profile-dropdown-content a {
    color: #333;
    text-decoration: none;
  }

  .profile-dropdown-content a:hover {
    color: #555;
  }
`}</style>

    </div>
  );
};

export default Users;
