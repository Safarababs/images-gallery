
function Footer() {
  
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>why choose us?</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, ducimus vitae enim cum vero fugiat minima reprehenderit dolores eaque voluptate.</p>
        </div>

        <div className="box">
          <h3>quick links</h3>
          <a href="#home">home</a>
          <a href="#home">explore</a>
          <a href="#home">licence</a>
          <a href="#home">login</a>
        </div>

        <div className="box">
          <h3>newsletter</h3>
          <p>subscribe for latest updates</p>
          <form action="">
            <input type="email" placeholder="enter your email"></input>
            <button className="fas fa-paper-plane"></button>
          </form>
        </div>
      </div>

      <h1 className="credit">©copyright @ {new Date().getFullYear()} by <a href="#home">mr. safar abbas</a> | all rights reserved.</h1>
    </section>
  );
}

export default Footer;
