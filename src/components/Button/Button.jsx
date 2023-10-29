import React from 'react';
import css from './Button.module.css';

export default function Button({ onClick }) {
  return (
    <div className={css.Btn_container}>
      <button onClick={onClick} className={css.Button}>
        Load more
      </button>
    </div>
  );
}
