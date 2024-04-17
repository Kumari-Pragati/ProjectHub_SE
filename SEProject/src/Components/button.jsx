import React from 'react';

function button() {
  return (
    <button 
      type="button" 
      className="btn btn-primary"
      style={{
        '--bs-btn-padding-y': '.25rem',
        '--bs-btn-padding-x': '.5rem',
        '--bs-btn-font-size': '.75rem'
      }}
    >
      Login/Register
    </button>
  );
}

export default button;
