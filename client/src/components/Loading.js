import React from "react";

export default function Loading({ space }) {
  const item = space ? space : "6rem";
  const margin = space ? "" : "6rem";
  return (
    <div className='d-flex justify-content-center mb-2'>
      <div
        className='spinner-border text-danger '
        role='status'
        style={{
          height: item,
          width: item,
          marginTop: margin,
        }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
}
