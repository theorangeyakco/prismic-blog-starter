import React from "react"
import yakLogo from "../../images/unnamed.jpg"

export default () => (
  <footer className="container">
    <p>
      Designed by{" "}
      <a
        href="https://theorangeyak.co"
        target="_blank"
        rel="noopener noreferrer"
      >
        The Orange Yak Company
      </a>
      <br />
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src={yakLogo} alt="Gray Prismic logo" />
      </a>
    </p>
  </footer>
)
