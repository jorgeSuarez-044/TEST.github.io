import React from 'react';

const FruitItem = ({ fruit }) => {
  return (
    <div>
      <p>{fruit.name}</p>
      <p>{fruit.price}</p>
      {/* Agrega más detalles de la fruta si es necesario */}
    </div>
  );
};

export default FruitItem;
