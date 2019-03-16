import React from "react";

const Navigation = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        id="navigation__toggle"
        className="navigation__checkbox"
      />
      <label htmlFor="navigation__toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Recent Tour
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
