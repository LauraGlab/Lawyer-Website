import "./Footer.css"

export default function Footer(){

    return (
       <footer>
          <div className="footerFirst">
            <div class="details">
              <h3> Contact info </h3>
              <p> E-mail: anna@gmail.com</p>
              <p> Mobile: +123456789</p>
              <p> web: about.me/anna </p>
            </div>
            <div class="details">
              <h3> Contact Info </h3>
              <p> E-mail: martyna@gmail.com</p>
              <p> Mobile: +123456789 </p>
              <p> web: martynaw.pl </p>
            </div>
            <div class="details">
              <h3> Working hours: 9am-4pm </h3>
              <p>Address: 67-353 Warsaw</p>
              <p> ul. Daueiorgdn </p>
              <p> 97/3a </p>
            </div>
          </div>
          <div className="footerSecond">
            <div className="portfolioLink"> Designed and Coded by Laura Głąb</div>
          </div>
        </footer>
    );
 }
