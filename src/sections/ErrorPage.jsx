import Logo from "./../assets/logo.svg";
import "./css/ErrorPage.css";

export default function ErrorPage() {
  return (
    <div className="error">
      <img className="errorLogo" src={Logo} alt="logo"/>
    </div>
  );
}
