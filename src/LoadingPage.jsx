import Logo from "./assets/logo.svg";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div className="loading">
      <img className="loadingLogo" src={Logo} alt="logo"/>
    </div>
  );
}
export default LoadingPage;
