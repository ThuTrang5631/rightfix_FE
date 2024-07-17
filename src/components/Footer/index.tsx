import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import { ROUTES } from "../../utils/constants";
import { footerData, listIconSocial } from "./constants";
import { CopyrightOutlined } from "@ant-design/icons";

interface IFooterSectionProps {
  title: string;
  items: any;
}

const FooterSection = ({ title, items }: IFooterSectionProps) => (
  <div className="footer-item">
    <h6 className="footer-item-title">{title}</h6>
    <ul className="footer-wrap-link">
      {Array.isArray(items)
        ? items?.map((item, index) => (
            <li className="footer-link" key={index}>
              <Link to="">{item}</Link>
            </li>
          ))
        : Object.entries(items).map(([src, desc], index) => (
            <li className="footer-link flex items-center" key={index}>
              <img className="footer-link-icon" src={src} alt="icon" />{" "}
              <a
                href={
                  src.includes("phone-call.svg")
                    ? `tel:${desc}`
                    : `mailto: ${desc}`
                }
              >
                {desc}
              </a>
            </li>
          ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <Link to={ROUTES.home}>
            <img alt="logo" src={logo} className="footer-logo" />
          </Link>
          <h2 className="footer-title">
            Design amazing digital experiences that create more happy in the
            world.
          </h2>
        </div>
        {Object.entries(footerData)?.map(([title, item], index) => (
          <FooterSection key={index} title={title} items={item} />
        ))}
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">
          <CopyrightOutlined />
          2077 ElectroBike. All rights reserved.
        </p>
        <ul className="footer-social flex gap-[24px]">
          {listIconSocial.map((icon, index) => (
            <li className="footer-social-item" key={index}>
              <Link to="" className="footer-social-link">
                <img src={icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
