"use client";

import React, { useState, KeyboardEvent } from 'react';
import ProxyAPIResult from './ProxyAPIResult';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [characterData, setCharacterData] = useState<ProxyAPIResult | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = async () => {
    try {
      setErrorMessage('');
      const response = await fetch(`http://localhost:8080/characters/search?name=${searchQuery}`);
	  console.log('Response:', response);

      if (response.status === 200) {
		const data = await response.json();
		console.log('Data:', data);
        setCharacterData(data);
      } else if (response.status === 404) {
        setCharacterData(null);
        setErrorMessage('Character not found');
      } else {
        setCharacterData(null);
        setErrorMessage('Internal server error');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setCharacterData(null);
      setErrorMessage('Error fetching data. Please try again later.');
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyDown} // Add this line to handle "Enter" key press
          placeholder="Enter character name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {errorMessage && <div>{errorMessage}</div>}

      {characterData && (
        <div>
          <h2>Name: {characterData.name}</h2>
          <p>Birth Year: {characterData.birth_year}</p>
          <p>Hair Color: {characterData.hair_color}</p>
          <p>Height: {characterData.height} cm</p>
          <p>Mass: {characterData.mass} kg</p>

          {characterData.species_info.length > 0 && (
            <div>
              <h3>Species Info:</h3>
              <ul>
                {characterData.species_info.map((species, index) => (
                  <li key={index}>
                    <strong>Name:</strong> {species.name}<br />
                    <strong>Classification:</strong> {species.classification}<br />
                    <strong>Designation:</strong> {species.designation}<br />
                    <strong>Language:</strong> {species.language}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {characterData.films_appeared_in.length > 0 && (
            <div>
              <h3>Films Appeared In:</h3>
              <ul>
                {characterData.films_appeared_in.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
            </div>
          )}

          {characterData.starships_flown_in.length > 0 && (
            <div>
              <h3>Starships Flown In:</h3>
              <ul>
                {characterData.starships_flown_in.map((starship, index) => (
                  <li key={index}>{starship}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomePage;
