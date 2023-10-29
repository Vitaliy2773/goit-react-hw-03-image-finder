import React from 'react';
import css from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image, onImageClick }) {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItem_image}
        src={image.webformatURL}
        onClick={() => onImageClick(image.largeImageURL)}
        alt="Img"
      />
    </li>
  );
}
