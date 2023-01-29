import { Component } from 'react';

import { fetchImages } from 'api/GalleryApi';

export class Gallery extends Component {
  componentDidMount() {
    fetchImages('cat', 1).then(console.log);
  }
}
