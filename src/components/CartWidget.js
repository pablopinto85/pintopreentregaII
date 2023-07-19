import '../App.css';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  return (
    <>
      <Link to="/">
        <a className="nav-link" href="cart">
          <FaShoppingCart />
        </a>
      </Link>
    </>
  );
}

export default CartWidget;