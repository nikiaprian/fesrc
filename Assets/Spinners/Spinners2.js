import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { MutatingDots } from 'react-loader-spinner';

function Spiner() {
  return (
    <>
      <div className="w-screen flex items-center justify-center">
      <MutatingDots ariaLabel="loading-indicator" />
      </div>
    </>
  );
}

export default Spiner;
