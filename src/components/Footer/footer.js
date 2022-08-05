import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <div className="footer">
      <section className="footer-details">
        <div className="footer-logo">Zuri.Team</div>

        <ul className="footer-links">
          <li>
            <h2>Links</h2>
          </li>
          <li className="footer-font">Store</li>
          <li className="footer-font">Blog</li>
        </ul>

        <div className="footer-contact">
          <h2>Contact</h2>
          <p>8 Jubilee-CMD Road, Magodo, Lagos State</p>
          <p className="footer-font">hello@zuri.team</p>
        </div>

        <div className="footer-follow">
          <h2>Follow Us</h2>
          <ul className="footer-media">
            <li>
              <a href="https://www.facebook.com/thezuriteam">
                {" "}
                <img src="https://zuri.team/img/fb.png" alt="fb" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/theZuriTeam">
                {" "}
                <img src="https://zuri.team/img/twitter.png" alt="twitter" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/thezuriteam/">
                {" "}
                <img src="https://zuri.team/img/IG.png" alt="IG" />
              </a>
            </li>
            <li>
              <a href="https://zuri.team/training#">
                {" "}
                <img src="https://zuri.team/img/in.png" alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <div className="copy">
        <p>&copy; 2020 ZURI TEAM</p>
      </div>
    </div>
  );
}

export default footer