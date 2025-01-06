import Logo from "./../assets/logo.svg";
import "./css/LoadingPage.css";

export default function LoadingPage() {
  return (
    <div className="loading">
      <img className="loadingLogo" src={Logo} alt="logo"/>
    </div>
  );
}
