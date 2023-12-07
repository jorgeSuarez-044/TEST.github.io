export const getFruits = () => {
    // Simula el consumo de una API
    return Promise.resolve([
      { id: 1, name: 'Apple', price: '$1.00' },
      { id: 2, name: 'Banana', price: '$0.75' },
      { id: 3, name: 'Orange', price: '$1.25' },
      { id: 4, name: 'Grapes', price: '$2.50' },
      { id: 5, name: 'Strawberry', price: '$0.50' },
      // Agrega más datos de frutas si es necesario
    ]);
  };
  