import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer__logo">
          <h2>Jadoo.</h2>
          <p>Book your trip in minute, get full Control for much longer.</p>
        </div>
        <div className="footer__links">
          <ul>
            <p>Company</p>
            <li>About</li>
            <li>Carrer</li>
            <li>Mobile</li>
          </ul>
          <ul>
            <p>Company</p>
            <li>About</li>
            <li>Carrer</li>
            <li>Mobile</li>
          </ul>
          <ul>
            <p>Company</p>
            <li>About</li>
            <li>Carrer</li>
            <li>Mobile</li>
          </ul>
        </div>
        <div className="footer__socials">
          <div className="footer__socials-icons">
            <img src="/svgs/fb.svg" alt="facebook" />
            <img src="/svgs/inst.png" alt="instagram" />
            <img src="/svgs/twitter.svg" alt="twitter" />
          </div>
          <div className="footer__socials-apps">
            <p>Discover our app</p>
            <div className="apps">
              <img src="/imgs/Google Play.png" alt="Google Play" />
              <img src="/imgs/Play Store.png" alt="Play Store" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center">All rights reserved@jadoo.co</p>
    </footer>
  )
}

export default Footer
