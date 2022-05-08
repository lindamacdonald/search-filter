import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [peeps, setPeeps] = useState([]);
  const [filteredPeeps, setFilterPeeps] = useState(peeps);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setPeeps(users));
  }, []);

  useEffect(() => {
    const newFilteredPeeps = peeps.filter((peep) => {
      return peep.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterPeeps(newFilteredPeeps);
  }, [peeps, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Filtered search</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search for a person...'
      />
      <CardList peeps={filteredPeeps} />
    </div>
  );
};

export default App;
