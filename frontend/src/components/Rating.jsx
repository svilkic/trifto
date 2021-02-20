import React from "react";
import { Star } from "./Star";
import PropTypes from "prop-types";

export const Rating = ({ value, text, className = "" }) => {
  const generateStars = () => {
    let stars = [];
    const fullStars = Math.floor((value * 10) / 10);
    const halfStars = (value * 10) % 10 == 5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStars);

    for (var i = 1; i <= fullStars; i++)
      stars.push(<Star key={i} className="fas fa-star" />);

    if (halfStars == 1)
      stars.push(<Star key={i} className="fas fa-star-half-alt" />);

    for (var i = 1; i <= emptyStars; i++)
      stars.push(<Star key={i * 10} className="far fa-star" />);

    return stars;
  };

  return (
    <div className="rating">
      <span className={className}>{generateStars()}</span> {text && text}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
};
