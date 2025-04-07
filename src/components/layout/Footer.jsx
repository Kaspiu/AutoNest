import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <div className="logoSection">
          <img src="/public/logo-t.png" alt="Logo" width={100} height={100} />
          <p>
            Track, compare, and manage your dream car collection in one place.
          </p>
        </div>
        <p>© 2025 AutoNest. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
