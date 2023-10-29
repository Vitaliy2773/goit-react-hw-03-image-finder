import React from 'react';
import css from './Modal.module.css';

export default function Modal({ largeImageURL, onClose }) {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={largeImageURL} alt="Img" onClick={e => e.stopPropagation()} />
      </div>
    </div>
  );
}
