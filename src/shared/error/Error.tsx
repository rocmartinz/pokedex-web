import React from 'react';

const Error: React.FC<{ message: string }> = ({ message }) => {
  return (
    <p className="text-red-600">{message}</p>
  );
};

export default Error;