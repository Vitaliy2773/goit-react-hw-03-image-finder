import React from 'react';
import css from './Loader.module.css';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={css.Oval}>
      <Oval />
    </div>
  );
}
