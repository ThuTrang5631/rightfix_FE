import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { MenuOutlined } from "@ant-design/icons";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img alt="logo" src={logo} />
      </div>
      <ul className="header-menu">
        <li className="header-item">
          <Link to="">Sản phẩm</Link>
        </li>
        <li className="header-item">
          <Link to="">Công nghệ</Link>
        </li>
        <li className="header-item">
          <Link to="">Dịch vụ</Link>
        </li>
        <li className="header-item">
          <Link to="">Phụ tùng</Link>
        </li>
        <li className="header-item">
          <Link to=""></Link>Khuyến mãi
        </li>
        <li className="header-item">
          <Link to="">Đại lý</Link>
        </li>
        <li className="header-item">
          <Link to="">New me Discover</Link>
        </li>
      </ul>
      <button className="header-btn-nav">
        <MenuOutlined style={{ fontSize: "25px" }} />
      </button>
    </header>
  );
};

export default Header;
