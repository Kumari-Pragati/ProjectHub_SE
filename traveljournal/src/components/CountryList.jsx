import { useState } from 'react';
import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountryList() {
  const [cities, setCities] = useState([]);
  const [newCity, setNewCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCity = () => {
    setCities(prevCities => [...prevCities, { country: newCity, emoji: '🏙️' }]); // replace with actual emoji or logic to get emoji
    setNewCity('');
  };

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <div>
      {isLoading ? <Spinner /> : null}
      {!cities.length ? <Message message="Add your first city by clicking on a city on the map" /> : null}
      <input value={newCity} onChange={e => setNewCity(e.target.value)} placeholder="Add a city" />
      <button onClick={handleAddCity}>Add City</button>
      <ul className={styles.countryList}>
        {countries.map((country) => (
          <CountryItem country={country} key={country.country} />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;