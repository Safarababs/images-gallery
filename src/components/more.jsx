function More(){

  const customStyle = {
    fontSize: "2rem",
    display: "block",
    margin: "0 auto",
    marginBottom: "3rem",
    height: "4rem",
    width: "20rem",
    borderRadius: "5rem",
    background: "#ff0552",
    color: "#fff",
    cursor: "pointer",  
    lineHeight: "4rem",
    textAlign: "center",
  }

  function mouseOver() {
    document.getElementById("more").style.background = "#333";
    document.getElementById("more").style.letterSpacing = ".1rem";
  }

  function mouseLeave() {
    document.getElementById("more").style.background = "#ff0552";
    document.getElementById("more").style.letterSpacing = "";
  }

  return (
      <a href="#home" id="more" style={customStyle}  onMouseEnter={mouseOver} onMouseLeave={mouseLeave}>discover more</a>  
    )
}

export default More;