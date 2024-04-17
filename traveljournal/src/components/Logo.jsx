import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <div style={{ fontSize: "38px" }} >Travel Journal</div>
    </Link>
  );
}

export default Logo;