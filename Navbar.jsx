import { Link } from "react-router-dom";

function Navbar() {
  return (
      
    <div className="Navbar">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRxbnIYR_2TEDCEf1JhpynX4x9q8C1v8YInw&s"
      alt="Sign Language Translator"
      style={{ width: "100%", maxWidth: "50px" }}></img>
        <Link to="/Home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/problemStatement">ProblemStatement</Link>
        <Link to="/architecture">Architecture</Link>
        <div className="button">
            <Link to="/contact">Contact</Link>
        </div>
    </div>

  );
}

export default Navbar;


