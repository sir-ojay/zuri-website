import React from 'react'
import "./footer.css"

const footer = () => {
  return (
    <div className="footer">
      <footer className="footer my-container mx-auto">
        <div className="footer-flex-container text-center text-md-left">
          <div className="flex-1">
            <img
              alt=""
              class="footer-logo"
              src="https://zuri.team/img/zuri-logo-full.svg"
            />
          </div>

          <div className="flex-3">
            <h3>Links</h3>
            <a href="/">
              <p>Store</p>
            </a>
            <a href="/">
              <p>Blog</p>
            </a>
          </div>

          <div class="flex-4 address">
            <h3>Contact</h3>
            <p>
              8 Jubliee-CMD Road, Magodo, <br />
              Lagos State
            </p>
            <p>
              <a href="mailto:hello@zuri.com">hello@zuri.team</a>
            </p>
          </div>

          <div class="flex-5">
            <h3>Follow Us</h3>
            <div class="contact-icons">
              <a
                target="_blank"
                href="https://web.facebook.com/thezuriteam"
                rel="noreferrer"
              >
                {" "}
                <img src="https://zuri.team/img/fb.png" alt="fb" />{" "}
              </a>
              <a
                target="_blank"
                href="https://twitter.com/theZuriTeam"
                rel="noreferrer"
              >
                {" "}
                <img
                  src="https://zuri.team/img/twitter.png"
                  alt="twitter"
                />{" "}
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/thezuriteam/"
                rel="noreferrer"
              >
                {" "}
                <img src="https://zuri.team/img/IG.png" alt="IG" />{" "}
              </a>
              <a href="/">
                {" "}
                <img src="https://zuri.team/img/in.png" alt="LinkedIn" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div>
            <hr class="m-3 md-0" />
        </div>

        <div class="mx-auto text-center copyright">
          <p> &copy; 2020 ZURI TEAM </p>
        </div>
      </footer>
    </div>
  );
}

export default footer