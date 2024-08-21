import "./Footer.css"

function Footer(){

  
  function scrollToTop() {
    scroll.scrollToTop();
  }

    return (
      <footer>
        <div className="footerFirst">
          <div class="details">
            <h3> Contact info </h3>
            <p> E-mail: niloy.swe@gmail.com</p>
            <p> Mobile: +8801756770501 </p>
            <p> web: about.me/niloy-biswas </p>
          </div>
          <div class="details">
            <h3> Contact Info </h3>
            <p> E-mail: martyna@gmail.com</p>
            <p> Mobile: +123456789 </p>
            <p> web: martynaw.pl </p>
          </div>
          <div class="details">
            <h3> Working hours: 9am-4pm </h3>
            <p>Address: 67-353 London</p>
            <p> ul. Daueiorgdn </p>
            <p> 97/3a </p>
          </div>
        </div>
        <div className="footerSecond">
          <div>poo</div>
        </div>
      </footer>
    );
 }

 export default Footer;