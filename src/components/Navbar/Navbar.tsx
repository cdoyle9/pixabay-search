import Link from "next/link";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">
        <h1>Pixabay Image Search</h1>
      </Link>
    </div>
  );
};

export default Navbar;
