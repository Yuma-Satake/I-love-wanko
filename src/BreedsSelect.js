// DO NOT DELETE
import * as React from 'react';
import PropTypes from 'prop-types';
import { DogImageList } from './DogImageList';

const BreedsSelect = ({ breeds }) => {
  const [selectedBreed, setSelectedBreed] = React.useState(breeds[0]);
  const [dogImages, setDogImages] = React.useState([]);
  const [showImages, setShowImages] = React.useState(true); // 初期状態をtrueに設定

  const handleUpdate = async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setDogImages(data.message);
      setShowImages(true);
    } catch (error) {
      console.error('Error fetching dog images:', error);
    }
  };

  return (
    <div>
      <div id="dropdown">
        <p>Breeds List</p>
        <select value={selectedBreed} onChange={(event) => setSelectedBreed(event.target.value)}>
          {Array.isArray(breeds) &&
            breeds.map((breed, index) => (
              <option key={index} value={breed}>
                {breed}
              </option>
            ))}
        </select>
        <button type="button" onClick={handleUpdate} id="displayButton">
          表示
        </button>
      </div>
      {showImages && <DogImageList dogImages={dogImages} />}
    </div>
  );
};

BreedsSelect.propTypes = {
  breeds: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export { BreedsSelect };
