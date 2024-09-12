import React from 'react';
import PropTypes from 'prop-types';

const Avatar = ({ src, alt, size = 'medium' }) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${sizeClasses[size]}`}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;
