
function Home() {
    return (
      <section className="home" id="home">
      <h1>stunning royalty free stock photos</h1>

      <form action="">
        <input type="search" id="search" placeholder="search images"></input>
        <label htmlFor="search" className="fas fa-search"></label>
      </form>

      <ul className="suggestion">
        <li>suggestions : </li>
        <li><a href="#home">nature</a></li>
        <li><a href="#home">girl</a></li>
        <li><a href="#home">man</a></li>
        <li><a href="#home">corporate</a></li>
        <li><a href="#home">city</a></li>
        <li><a href="#home">more...</a></li>
      </ul>
      </section>
    );
  }
  
  export default Home;