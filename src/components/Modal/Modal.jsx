import React from 'react';
import css from './Modal.module.css';

export default function Modal({ largeImageURL, onClose }) {
  return (
    <div
      className={css.Overlay}
      onClick={e => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Img" />
      </div>
    </div>
  );
}
