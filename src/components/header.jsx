
function Header() {
  return (
    <header>
      <a href="#home" className="logo"> <i className="fas fa-fire"></i>free</a>

      <form action="">
        <input type="search" id="search" placeholder="search images"></input>
        <label htmlFor="search" className="fas fa-search"></label>
      </form>

      <div id="menu" className="fas fa-bars"></div>

      <nav className="navbar">
        <ul>
          <li><a href="#home">explore</a></li>
          <li><a href="#licence">licence</a></li>
          <li><a href="#login">login</a></li>
        </ul>
      </nav>

      <a href="#home" className="upload">upload</a>
    </header>
  )
}

export default Header;