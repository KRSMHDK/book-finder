import { Button, Container, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Search() {
  const [search, setSearch] = useState('');

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => res.json())
      .then((data) => history.push({ pathname: '/results', state: data }));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          type='search'
          variant='filled'
          label='Search Book'
        />
        <br />
        <Button type='submit' variant='contained' color='primary'>
          Search
        </Button>
      </form>
    </Container>
  );
}
