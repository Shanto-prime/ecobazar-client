import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <main id="error-page" className="error-page">
      <div className="error-box">
        <h1 className="error-title">404</h1>
        <p className="error-subtitle">Oops! Page Not Found</p>
        <p className="error-message">
          The page you're looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="error-btn">Go Home</Link>
      </div>
    </main>
  );
}
