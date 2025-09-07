import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Intro</Link>
      <Link to="/home">Home</Link>
    </nav>
  );
}

export default Navbar;