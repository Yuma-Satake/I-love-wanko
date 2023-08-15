// DO NOT DELETE
import * as React from 'react'
import { useState } from 'react'
import { DogImage } from './DogImage'
import { Button, Container } from '@mui/material'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/shiba/shiba-16.jpg',
  )

  const handleUpdate = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message))
      .catch(error => console.log(error))
  }

  return (
    <div id="flex">
      <h2>愛しいわんこを眺めるためのサイトです</h2>
      <Container>
        <DogImage url={dogUrl} />
      </Container>
      <Button
        variant="contained"
        type="button"
        onClick={handleUpdate}
        id="updateButton"
      >
        更新
      </Button>
    </div>
  )
}
