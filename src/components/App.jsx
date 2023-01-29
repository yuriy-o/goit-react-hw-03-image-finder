import React, { Component } from 'react';

// import { Gallery } from './Gallery/Gallery';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
const { Container } = require('./App.styled');

export class App extends Component {
  render() {
    return (
      <Container>
        {/* <Gallery /> */}
        <Searchbar />
        <ImageGallery />
      </Container>
    );
  }
}
