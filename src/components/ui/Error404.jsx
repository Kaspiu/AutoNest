import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="errorContainer">
      <div className="errorBox">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <Link to="/">GO TO HOME PAGE</Link>
      </div>
    </div>
  );
};

export default Error404;
