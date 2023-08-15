// DO NOT DELETE
import React from 'react';
import PropTypes from 'prop-types';

const DogImageList = ({ dogImages }) => {
  return (
    <div id="imageContainer">
      {dogImages.map((imageUrl, index) => (
        <img
          key={index}
          src={imageUrl}
          alt={`Dog ${index + 1}`}
          id="dogImageList"
        />
      ))}
    </div>
  );
};

DogImageList.propTypes = {
  dogImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { DogImageList };