import Logo from "./../assets/logo.svg";
import "./css/ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error">
      <img className="errorLogo" src={Logo} alt="logo"/>
      <p className="errorText">An unexpected error has occurred. Please refresh the page.</p>
    </div>
  );
}
