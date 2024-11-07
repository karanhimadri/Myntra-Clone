import { BsFillPersonFill } from "react-icons/bs";
import { FaFaceGrinHearts, FaBagShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchItems } from "../store/searchingImple.js";
import { RxCross1 } from "react-icons/rx";
import "./Header.css";

const Header = ({ setA }) => {
  const bag = useSelector((store) => store.bag_store);
  const navigate = useNavigate();

  const [crossBtn, setCrossBtn] = useState(true);
  const [searchItem, setSearchItem] = useState("");
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();

      const itemIDs = searchItems(searchItem);
      setA(itemIDs);
      navigate(`/search_item/search_name=${searchItem}`);
    }
  };

  const handleCrossBtnShowing = () => {
    if (searchItem.length !== 0) {
      setCrossBtn(false);
    } else {
      setCrossBtn(true);
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("token");
  };

  useEffect(() => {
    handleCrossBtnShowing();
  }, [searchItem]);

  return (
    <header>
      <div className="logo_container">
        <Link to="/">
          <img
            className="myntra_home"
            src="images/myntra_logo.png"
            alt="Myntra Home"
          />
        </Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">
          Studio <sup>New</sup>
        </a>
      </nav>
      <div className="search_bar">
        <div className="search_icon">
          <img src="/images/search.png" alt="" />
        </div>
        <input
          className="search_input"
          placeholder="Search for products, brands and more"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          onKeyDown={handleOnKeyDown}
        />
        <button
          onClick={() => setSearchItem("")}
          className={`remove-btn ${crossBtn ? "display-btn" : ""}`}
        >
          <RxCross1 />
        </button>
      </div>
      <div className="action_bar">
        <div className="action_container">
          <BsFillPersonFill />
          <span className="action_name">Profile</span>
          <div className="profile-dropdown">
            <ul
              className="dropdown-menu position-static d-grid gap-1 p-2 rounded-3 mx-0 shadow w-220px  "
              data-bs-theme="light"
            >
              <li>
                <a className="dropdown-item rounded-2 active" href="#">
                  Your Order
                </a>
              </li>
              <li>
                <a className="dropdown-item rounded-2" href="#">
                  Your Cart
                </a>
              </li>
              <li>
                <a className="dropdown-item rounded-2" href="#">
                  Coupons
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a onClick={clearLocalStorage} className="dropdown-item rounded-2" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="action_container">
          <FaFaceGrinHearts />
          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaBagShopping />
          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
